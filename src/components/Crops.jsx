import React, {
  useMemo,
  useState,
} from "react";

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Save,
  Sprout,
} from "lucide-react";

import {
  arrayUnion,
  doc,
  updateDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase";

import {
  useLocation,
} from "../LocationContext.jsx";

import {
  useLanguage,
} from "../LanguageContext.jsx";

import {
  evaluateCropViability,
} from "../data/cropViability";


const crops = [
  "Rice",
  "Wheat",
  "Maize",
  "Sugarcane",
  "Arecanut",
  "Arhar/Tur",
  "Banana",
  "Black pepper",
  "Cashewnut",
  "Coconut",
  "Cowpea(Lobia)",
  "Dry chillies",
  "Ginger",
  "Groundnut",
  "Moong(Green Gram)",
  "Rapeseed & Mustard",
  "Sesamum",
  "Sunflower",
  "Turmeric",
  "Urad",
  "Bajra",
  "Coriander",
  "Cotton(lint)",
  "Garlic",
  "Gram",
  "Jowar",
  "Onion",
  "Potato",
  "Ragi",
  "Soyabean",
  "Tobacco",
  "Barley",
  "Jute",
];


const yieldPerHa = {
  Rice: 3.2,
  Wheat: 3.4,
  Maize: 3.1,
  Sugarcane: 72,
  Arecanut: 1.7,
  "Arhar/Tur": 0.9,
  Banana: 34,
  "Black pepper": 0.35,
  Coconut: 8.5,
  Groundnut: 1.8,
  Onion: 18,
  Potato: 22,
  Ragi: 2.1,
  Soyabean: 1.4,
  Turmeric: 5.5,
  Jute: 2.4,
};


export default function Crops() {
  const {
    place,
    state,
    district,
  } = useLocation();

  const {
    t,
  } = useLanguage();


  const [
    crop,
    setCrop,
  ] = useState("");

  const [
    season,
    setSeason,
  ] = useState("");

  const [
    area,
    setArea,
  ] = useState("");

  const [
    prediction,
    setPrediction,
  ] = useState(null);

  const [
    viability,
    setViability,
  ] = useState(null);

  const [
    source,
    setSource,
  ] = useState("");

  const [
    busy,
    setBusy,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");

  const [
    saved,
    setSaved,
  ] = useState(false);


  const locationReady =
    Boolean(
      state &&
      district
    );


  const viabilityLabel =
    viability?.level === "high"
      ? t("highViability")
      : viability?.level === "moderate"
      ? t("moderateViability")
      : viability?.level === "low"
      ? t("lowViability")
      : "";


  // ========================================================
  // LOCAL PRODUCTION ESTIMATE
  // ========================================================

  const estimateLocal = (
    suitability
  ) => {
    const base =
      yieldPerHa[crop] ||
      2.4;

    const seasonFactor =
      season === "Kharif"
        ? 1
        : season === "Rabi"
        ? 0.96
        : 0.88;

    const viabilityFactor =
      suitability?.level === "moderate"
        ? suitability.multiplier ?? 0.7
        : 1;

    const result =
      base *
      Number(area) *
      1000 *
      seasonFactor *
      viabilityFactor;

    return Number(
      result.toFixed(0)
    );
  };


  // ========================================================
  // RESET ANALYSIS
  // ========================================================

  const resetAnalysis =
    () => {
      setPrediction(null);
      setViability(null);
      setSource("");
      setSaved(false);
      setError("");
    };


  // ========================================================
  // RUN ANALYSIS
  // ========================================================

  const run =
    async () => {
      setError("");
      setSaved(false);
      setPrediction(null);
      setViability(null);
      setSource("");

      if (
        !crop ||
        !season ||
        !area ||
        Number(area) <= 0
      ) {
        setError(
          t(
            "cropInputError",
            "Choose a crop and season and enter a valid land area."
          )
        );

        return;
      }

      if (!locationReady) {
        setError(
          t(
            "cropLocationError",
            "Set your farm location on the Weather page first."
          )
        );

        return;
      }

      setBusy(true);

      try {
        const suitability =
          evaluateCropViability({
            crop,
            state,
            season,
          });

        setViability(
          suitability
        );


        // ==================================================
        // LOW VIABILITY:
        // NO PRODUCTION ESTIMATE
        // ==================================================

        if (
          suitability.level === "low"
        ) {
          setPrediction(null);

          setSource(
            t(
              "cropAssessmentSource",
              "Crop viability assessment"
            )
          );

          return;
        }


        let production =
          null;

        let used =
          suitability.level === "moderate"
            ? t(
                "averageProductionEstimate"
              )
            : t(
                "productionEstimate"
              );


        // ==================================================
        // OPTIONAL ML API
        // ==================================================

        const endpoint =
          import.meta.env
            .VITE_PREDICTION_API;


        if (endpoint) {
          try {
            const response =
              await fetch(
                endpoint,
                {
                  method: "POST",

                  headers: {
                    "Content-Type":
                      "application/json",
                  },

                  body:
                    JSON.stringify({
                      state,
                      district,
                      crop,
                      season,
                      area:
                        Number(area),
                    }),
                }
              );

            if (
              response.ok
            ) {
              const data =
                await response.json();

              const apiPrediction =
                Array.isArray(
                  data?.prediction
                )
                  ? data.prediction[0]
                  : data?.prediction;

              if (
                Number.isFinite(
                  Number(
                    apiPrediction
                  )
                )
              ) {
                if (
                  suitability.level ===
                  "high"
                ) {
                  production =
                    Math.round(
                      Number(
                        apiPrediction
                      )
                    );

                  used =
                    t(
                      "productionModelEstimate",
                      "Production model estimate"
                    );
                }

                if (
                  suitability.level ===
                  "moderate"
                ) {
                  production =
                    Math.round(
                      Number(
                        apiPrediction
                      ) *
                        (
                          suitability
                            .multiplier ??
                          0.7
                        )
                    );

                  used =
                    t(
                      "averageModelEstimate",
                      "Average model estimate"
                    );
                }
              }
            }

          } catch (
            apiError
          ) {
            console.warn(
              "Prediction API unavailable:",
              apiError
            );
          }
        }


        // ==================================================
        // LOCAL FALLBACK
        // ==================================================

        if (
          production == null
        ) {
          production =
            estimateLocal(
              suitability
            );

          used =
            suitability.level === "moderate"
              ? t(
                  "averageRegionalEstimate",
                  "Average regional estimate"
                )
              : t(
                  "regionalProductionEstimate",
                  "Regional production estimate"
                );
        }


        setPrediction(
          production
        );

        setSource(
          used
        );

      } finally {
        setBusy(false);
      }
    };


  // ========================================================
  // SAVE REPORT
  // ========================================================

  const save =
    async () => {
      if (
        prediction == null ||
        !auth.currentUser
      ) {
        return;
      }

      setError("");

      try {
        const report = [
          new Date()
            .toISOString(),

          crop,

          String(
            area
          ),

          String(
            prediction
          ),

          `${district}, ${state}`,

          season,

          viabilityLabel,

          source,
        ].join(" | ");

        await updateDoc(
          doc(
            db,
            "users",
            auth.currentUser
              .uid
          ),
          {
            reports:
              arrayUnion(
                report
              ),
          }
        );

        setSaved(true);

      } catch {
        setError(
          t(
            "saveReportError",
            "Could not save the report. Please try again."
          )
        );
      }
    };


  const tonnes =
    useMemo(
      () =>
        prediction == null
          ? null
          : (
              prediction /
              1000
            ).toFixed(2),
      [prediction]
    );


  return (
    <div className="page">

      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="page-hero">

        <div>

          <span className="eyebrow">
            {t(
              "cropPlanningKicker"
            )}
          </span>

          <h1>
            {t(
              "cropTitle"
            )}
          </h1>

          <p>
            {t(
              "cropIntro"
            )}
          </p>

        </div>


        <div
          className={
            locationReady
              ? "location-pill"
              : "location-pill warning"
          }
        >
          <MapPin
            size={16}
          />

          {place?.label ||
            t(
              "locationNotSet"
            )}
        </div>

      </div>


      <div className="two-col">

        {/* =================================================
            INPUTS
        ================================================= */}

        <section className="panel form-panel">

          <div className="panel-title">

            <span>
              {t(
                "inputs"
              )}
            </span>

            <h2>
              {t(
                "cropDetails"
              )}
            </h2>

          </div>


          <label>

            {t(
              "crop"
            )}

            <select
              value={
                crop
              }
              onChange={(
                event
              ) => {
                setCrop(
                  event.target.value
                );

                resetAnalysis();
              }}
            >
              <option value="">
                {t(
                  "selectCrop"
                )}
              </option>

              {crops.map(
                (
                  item
                ) => (
                  <option
                    key={
                      item
                    }
                    value={
                      item
                    }
                  >
                    {item}
                  </option>
                )
              )}
            </select>

          </label>


          <label>

            {t(
              "season"
            )}

            <select
              value={
                season
              }
              onChange={(
                event
              ) => {
                setSeason(
                  event.target.value
                );

                resetAnalysis();
              }}
            >
              <option value="">
                {t(
                  "selectSeason"
                )}
              </option>

              <option value="Kharif">
                Kharif
              </option>

              <option value="Rabi">
                Rabi
              </option>

              <option value="Zaid">
                Zaid
              </option>
            </select>

          </label>


          <label>

            {t(
              "landArea"
            )}

            <input
              type="number"
              min="0"
              step="0.1"
              value={
                area
              }
              onChange={(
                event
              ) => {
                setArea(
                  event.target.value
                );

                resetAnalysis();
              }}
              placeholder="e.g. 2.5"
            />

          </label>


          {error && (
            <div className="form-error">
              {error}
            </div>
          )}


          <button
            className="primary-btn"
            onClick={
              run
            }
            disabled={
              busy
            }
          >
            {busy
              ? t(
                  "analysing"
                )
              : t(
                  "checkViability"
                )}

            <ArrowRight
              size={16}
            />
          </button>

        </section>


        {/* =================================================
            RESULTS
        ================================================= */}

        <section className="panel result-panel">

          {!viability ? (

            <div className="result-empty">

              <Sprout
                size={35}
              />

              <h3>
                {t(
                  "cropAnalysisEmpty"
                )}
              </h3>

              <p>
                {t(
                  "cropAnalysisHelp"
                )}
              </p>

            </div>

          ) : (

            <>

              <div
                className={
                  `viability-card ${
                    viability?.level ||
                    "unknown"
                  }`
                }
              >

                <div className="viability-icon">

                  {viability
                    ?.level ===
                  "high" ? (

                    <CheckCircle2
                      size={23}
                    />

                  ) : (

                    <AlertTriangle
                      size={23}
                    />

                  )}

                </div>


                <div>

                  <span>
                    {t(
                      "cropViability"
                    )}
                  </span>

                  <strong>
                    {viabilityLabel}
                  </strong>

                  <p>
                    {
                      viability?.message
                    }
                  </p>

                </div>


                {viability
                  ?.score !=
                  null && (

                  <div className="viability-score">

                    <b>
                      {
                        viability
                          .score
                      }
                    </b>

                    <small>
                      /100
                    </small>

                  </div>

                )}

              </div>


              {/* LOW VIABILITY */}

              {viability.level ===
                "low" && (

                <div className="low-viability-result">

                  <AlertTriangle
                    size={25}
                  />

                  <div>

                    <span>
                      {t(
                        "productionEstimate"
                      )}
                    </span>

                    <h3>
                      {t(
                        "notRecommended"
                      )}
                    </h3>

                    <p>
                      {t(
                        "lowEstimateMessage"
                      )}
                    </p>

                  </div>

                </div>

              )}


              {/* MODERATE / HIGH */}

              {viability.level !==
                "low" &&
                prediction !=
                  null && (

                <>

                  <span className="eyebrow">
                    {viability.level ===
                    "moderate"
                      ? t(
                          "averageProductionEstimate"
                        )
                      : t(
                          "productionEstimate"
                        )}
                  </span>


                  <strong className="big-number">

                    {prediction.toLocaleString(
                      "en-IN"
                    )}

                    <small>
                      kg
                    </small>

                  </strong>


                  <p className="result-sub">
                    ≈ {tonnes} tonnes
                    across {area} ha
                  </p>


                  {viability.level ===
                    "moderate" && (

                    <div className="moderate-note">

                      <AlertTriangle
                        size={17}
                      />

                      <p>
                        {t(
                          "moderateEstimateMessage"
                        )}
                      </p>

                    </div>

                  )}


                  <div className="result-meta">

                    <div>
                      <span>
                        {t(
                          "crop"
                        )}
                      </span>

                      <b>
                        {crop}
                      </b>
                    </div>


                    <div>
                      <span>
                        {t(
                          "season"
                        )}
                      </span>

                      <b>
                        {season}
                      </b>
                    </div>


                    <div>
                      <span>
                        {t(
                          "location"
                        )}
                      </span>

                      <b>
                        {district},{" "}
                        {state}
                      </b>
                    </div>


                    <div>
                      <span>
                        {t(
                          "assessment"
                        )}
                      </span>

                      <b>
                        {viabilityLabel}
                      </b>
                    </div>


                    <div>
                      <span>
                        {t(
                          "method"
                        )}
                      </span>

                      <b>
                        {source}
                      </b>
                    </div>

                  </div>


                  <button
                    className="secondary-btn"
                    onClick={
                      save
                    }
                  >
                    <Save
                      size={16}
                    />

                    {saved
                      ? t(
                          "savedToReports"
                        )
                      : t(
                          "saveReport"
                        )}
                  </button>

                </>

              )}

            </>

          )}

        </section>

      </div>

    </div>
  );
}