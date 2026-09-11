import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Calendar,
  FileText,
  MapPin,
  RefreshCw,
  Sprout,
} from "lucide-react";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase";

import {
  useLanguage,
} from "../LanguageContext.jsx";


function parse(report, index) {
  if (
    typeof report === "object" &&
    report
  ) {
    return {
      id: report.id || index,
      ...report,
    };
  }

  const parts =
    String(report).split(" | ");

  return {
    id: index,
    timestamp: parts[0] || "",
    crop:
      parts[1] || "Unknown crop",
    area:
      parts[2] || "—",
    production:
      parts[3] || "—",
    location:
      parts[4] || "—",
    season:
      parts[5] || "—",
    method:
      parts[7] ||
      parts[6] ||
      "Saved estimate",
    viability:
      parts[6] || "",
  };
}


export default function Reports() {
  const {
    t,
  } = useLanguage();


  const [
    reports,
    setReports,
  ] = useState([]);


  const [
    selected,
    setSelected,
  ] = useState(null);


  const [
    loading,
    setLoading,
  ] = useState(true);


  const [
    error,
    setError,
  ] = useState("");


  // ========================================================
  // LOAD REPORTS
  // ========================================================

  const load =
    async () => {
      setLoading(true);
      setError("");

      try {
        const user =
          auth.currentUser;

        if (!user) {
          throw new Error(
            "Not signed in"
          );
        }


        const snapshot =
          await getDoc(
            doc(
              db,
              "users",
              user.uid
            )
          );


        const items =
          (
            snapshot.exists()
              ? snapshot.data()
                  .reports || []
              : []
          )
            .map(parse)
            .sort(
              (a, b) =>
                new Date(
                  b.timestamp
                ) -
                new Date(
                  a.timestamp
                )
            );


        setReports(
          items
        );

        setSelected(
          items[0] ||
            null
        );

      } catch (
        loadError
      ) {
        console.error(
          "Could not load reports:",
          loadError
        );

        setError(
          t(
            "reportsLoadError",
            "Could not load reports."
          )
        );

      } finally {
        setLoading(
          false
        );
      }
    };


  useEffect(() => {
    load();
  }, []);


  // ========================================================
  // TOTALS
  // ========================================================

  const totals =
    useMemo(
      () => ({
        count:
          reports.length,

        area:
          reports.reduce(
            (
              total,
              report
            ) =>
              total +
              (
                Number(
                  report.area
                ) || 0
              ),

            0
          ),

        production:
          reports.reduce(
            (
              total,
              report
            ) =>
              total +
              (
                Number(
                  report.production
                ) || 0
              ),

            0
          ),
      }),

      [reports]
    );


  // ========================================================
  // UI
  // ========================================================

  return (
    <div className="page">

      {/* =========================================
          HERO
      ========================================= */}

      <div className="page-hero">

        <div>

          <span className="eyebrow">
            {t(
              "reportsKicker",
              "REPORTS"
            )}
          </span>


          <h1>
            {t(
              "reportsPageTitle",
              "Your crop planning history, in one place."
            )}
          </h1>


          <p>
            {t(
              "reportsPageIntro",
              "Review saved production estimates and the location used for each report."
            )}
          </p>

        </div>


        <button
          className="secondary-btn refresh-btn"
          onClick={load}
        >
          <RefreshCw
            size={16}
          />

          {t(
            "refresh",
            "Refresh"
          )}
        </button>

      </div>


      {/* =========================================
          ERROR
      ========================================= */}

      {error && (
        <div className="form-error page-error">
          {error}
        </div>
      )}


      {/* =========================================
          KPI CARDS
      ========================================= */}

      <div className="report-kpis">

        <Kpi
          label={
            t(
              "savedReports",
              "Saved reports"
            )
          }
          value={
            totals.count
          }
        />


        <Kpi
          label={
            t(
              "plannedArea",
              "Planned area"
            )
          }
          value={
            `${totals.area.toFixed(
              1
            )} ha`
          }
        />


        <Kpi
          label={
            t(
              "estimatedProduction",
              "Estimated production"
            )
          }
          value={
            `${(
              totals.production /
              1000
            ).toFixed(
              1
            )} t`
          }
        />

      </div>


      {/* =========================================
          LOADING
      ========================================= */}

      {loading ? (

        <div className="panel empty-panel">

          {t(
            "loadingReports",
            "Loading reports…"
          )}

        </div>

      ) : reports.length ===
        0 ? (

        /* =======================================
           EMPTY
        ======================================= */

        <div className="panel empty-panel">

          <FileText
            size={30}
          />


          <h3>
            {t(
              "noReports",
              "No saved reports yet."
            )}
          </h3>


          <p>
            {t(
              "noReportsHelp",
              "Create a crop estimate and save it to see it here."
            )}
          </p>

        </div>

      ) : (

        /* =======================================
           REPORTS CONTENT
        ======================================= */

        <div className="reports-layout">

          {/* =====================================
              HISTORY
          ===================================== */}

          <section className="panel report-list">

            <div className="panel-title">

              <span>
                {t(
                  "reportHistory",
                  "HISTORY"
                )}
              </span>


              <h2>
                {t(
                  "savedEstimates",
                  "Saved estimates"
                )}
              </h2>

            </div>


            {reports.map(
              (
                report
              ) => (

                <button
                  key={
                    report.id
                  }
                  onClick={() =>
                    setSelected(
                      report
                    )
                  }
                  className={
                    selected?.id ===
                    report.id
                      ? "report-row active"
                      : "report-row"
                  }
                >

                  <div>

                    <strong>
                      {
                        report.crop
                      }
                    </strong>


                    <span>

                      <MapPin
                        size={12}
                      />

                      {
                        report.location
                      }

                    </span>

                  </div>


                  <b>
                    {Number(
                      report.production
                    ).toLocaleString(
                      "en-IN"
                    )}{" "}
                    kg
                  </b>

                </button>

              )
            )}

          </section>


          {/* =====================================
              DETAIL
          ===================================== */}

          <section className="panel report-detail">

            {selected && (
              <>

                <span className="eyebrow">
                  {t(
                    "reportDetail",
                    "REPORT DETAIL"
                  )}
                </span>


                <h2>
                  {
                    selected.crop
                  }
                </h2>


                <div className="detail-stack">

                  <Item
                    icon={
                      Calendar
                    }
                    label={
                      t(
                        "date",
                        "Date"
                      )
                    }
                    value={
                      selected.timestamp
                        ? new Date(
                            selected.timestamp
                          ).toLocaleString(
                            "en-IN"
                          )
                        : "—"
                    }
                  />


                  <Item
                    icon={
                      MapPin
                    }
                    label={
                      t(
                        "location"
                      )
                    }
                    value={
                      selected.location
                    }
                  />


                  <Item
                    icon={
                      Sprout
                    }
                    label={
                      t(
                        "season"
                      )
                    }
                    value={
                      selected.season
                    }
                  />


                  <Item
                    icon={
                      FileText
                    }
                    label={
                      t(
                        "landArea",
                        "Land area"
                      )
                    }
                    value={
                      `${selected.area} ha`
                    }
                  />


                  <Item
                    icon={
                      FileText
                    }
                    label={
                      t(
                        "estimatedProduction",
                        "Estimated production"
                      )
                    }
                    value={
                      `${Number(
                        selected.production
                      ).toLocaleString(
                        "en-IN"
                      )} kg`
                    }
                  />

                </div>


                {selected.viability && (
                  <div className="report-viability">
                    <span>
                      {t(
                        "assessment",
                        "Assessment"
                      )}
                    </span>

                    <strong>
                      {
                        selected.viability
                      }
                    </strong>
                  </div>
                )}


                <p className="data-note">
                  {selected.method ||
                    t(
                      "savedEstimate",
                      "Saved estimate"
                    )}
                </p>

              </>
            )}

          </section>

        </div>

      )}

    </div>
  );
}


function Kpi({
  label,
  value,
}) {
  return (
    <div className="kpi">

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


function Item({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="detail-item">

      <Icon
        size={17}
      />

      <div>

        <span>
          {label}
        </span>

        <strong>
          {value}
        </strong>

      </div>

    </div>
  );
}