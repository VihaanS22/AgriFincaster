import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  CloudRain,
  CloudSun,
  LocateFixed,
  MapPin,
  Search,
  Sun,
  Wind,
} from "lucide-react";

import {
  useLocation,
} from "../LocationContext.jsx";

import {
  useLanguage,
} from "../LanguageContext.jsx";


const codeLabel = (
  code
) =>
  ({
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Fog",
    51: "Light drizzle",
    53: "Drizzle",
    55: "Heavy drizzle",
    61: "Light rain",
    63: "Rain",
    65: "Heavy rain",
    71: "Light snow",
    73: "Snow",
    75: "Heavy snow",
    80: "Rain showers",
    81: "Rain showers",
    82: "Heavy showers",
    95: "Thunderstorm",
  }[code] ||
  "Mixed conditions");


export default function Weather() {
  const {
    place,
    setPlace,
    ready,
  } = useLocation();

  const {
    t,
  } = useLanguage();

  const [
    query,
    setQuery,
  ] = useState("");

  const [
    suggestions,
    setSuggestions,
  ] = useState([]);

  const [
    weather,
    setWeather,
  ] = useState(null);

  const [
    loading,
    setLoading,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState("");


  useEffect(() => {
    if (!ready) return;

    if (!place) {
      setWeather(null);
      setQuery("");
      setSuggestions([]);
      setError("");
      return;
    }

    loadWeather(place);
  }, [
    place,
    ready,
  ]);


  useEffect(() => {
    const timer =
      setTimeout(
        async () => {
          if (
            query.trim()
              .length < 2
          ) {
            setSuggestions(
              []
            );

            return;
          }

          try {
            const url =
              `https://geocoding-api.open-meteo.com/v1/search` +
              `?name=${encodeURIComponent(
                query.trim()
              )}` +
              `&count=8&language=en&format=json&countryCode=IN`;

            const response =
              await fetch(
                url
              );

            const data =
              await response.json();

            setSuggestions(
              (
                data.results ||
                []
              ).map(
                (
                  item
                ) => ({
                  label: [
                    item.name,
                    item.admin2,
                    item.admin1,
                  ]
                    .filter(
                      Boolean
                    )
                    .join(
                      ", "
                    ),

                  city:
                    item.name,

                  district:
                    item.admin2 ||
                    item.name,

                  state:
                    item.admin1 ||
                    "",

                  country:
                    item.country ||
                    "India",

                  latitude:
                    item.latitude,

                  longitude:
                    item.longitude,
                })
              )
            );

          } catch {
            setSuggestions(
              []
            );
          }
        },

        300
      );

    return () =>
      clearTimeout(
        timer
      );

  }, [query]);


  const loadWeather =
    async (
      selectedPlace
    ) => {

      if (
        !Number.isFinite(
          Number(
            selectedPlace
              ?.latitude
          )
        ) ||
        !Number.isFinite(
          Number(
            selectedPlace
              ?.longitude
          )
        )
      ) {
        return;
      }

      setLoading(true);
      setError("");

      try {
        const url =
          `https://api.open-meteo.com/v1/forecast` +
          `?latitude=${selectedPlace.latitude}` +
          `&longitude=${selectedPlace.longitude}` +
          `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m` +
          `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum` +
          `&timezone=auto&forecast_days=7`;

        const response =
          await fetch(
            url
          );

        if (!response.ok) {
          throw new Error();
        }

        setWeather(
          await response.json()
        );

      } catch {
        setWeather(
          null
        );

        setError(
          "Could not load weather."
        );

      } finally {
        setLoading(
          false
        );
      }
    };


  const pick = (
    suggestion
  ) => {
    setPlace(
      suggestion
    );

    setQuery("");
    setSuggestions([]);
  };


  const useBrowserLocation =
    () => {
      if (
        !navigator
          .geolocation
      ) {
        return;
      }

      navigator
        .geolocation
        .getCurrentPosition(
          (
            position
          ) => {
            setPlace({
              label:
                "Current location",

              city:
                "Current location",

              district:
                "",

              state:
                "",

              country:
                "India",

              latitude:
                position
                  .coords
                  .latitude,

              longitude:
                position
                  .coords
                  .longitude,
            });
          }
        );
    };


  const days =
    useMemo(
      () =>
        weather
          ?.daily
          ?.time
          ?.map(
            (
              date,
              index
            ) => ({
              date,

              max:
                weather
                  .daily
                  .temperature_2m_max[
                  index
                ],

              min:
                weather
                  .daily
                  .temperature_2m_min[
                  index
                ],

              rain:
                weather
                  .daily
                  .precipitation_sum[
                  index
                ],

              code:
                weather
                  .daily
                  .weather_code[
                  index
                ],
            })
          ) || [],

      [weather]
    );


  return (
    <div className="page">

      <div className="page-hero">

        <div>

          <span className="eyebrow">
            {t(
              "weatherKicker"
            )}
          </span>

          <h1>
            {t(
              "weatherTitle"
            )}
          </h1>

          <p>
            {t(
              "weatherIntro"
            )}
          </p>

        </div>

        {place && (
          <div className="location-pill">

            <MapPin
              size={16}
            />

            {place.label}

          </div>
        )}

      </div>


      <section className="panel weather-search">

        <div className="search-line">

          <Search
            size={18}
          />

          <input
            value={query}
            onChange={(
              event
            ) =>
              setQuery(
                event
                  .target
                  .value
              )
            }
            placeholder={
              t(
                "searchLocation"
              )
            }
          />

          <button
            className="icon-btn"
            onClick={
              useBrowserLocation
            }
            title={
              t(
                "useCurrentLocation"
              )
            }
          >
            <LocateFixed
              size={18}
            />
          </button>

        </div>


        {suggestions.length >
          0 && (

          <div className="suggestions">

            {suggestions.map(
              (
                suggestion,
                index
              ) => (

                <button
                  key={`${suggestion.label}-${index}`}
                  onClick={() =>
                    pick(
                      suggestion
                    )
                  }
                >
                  <MapPin
                    size={15}
                  />

                  <span>
                    {
                      suggestion.label
                    }
                  </span>
                </button>

              )
            )}

          </div>

        )}

      </section>


      {error && (
        <div className="form-error page-error">
          {error}
        </div>
      )}


      {loading && (
        <div className="panel empty-panel">
          {t(
            "loading"
          )}
        </div>
      )}


      {weather &&
        !loading && (
        <>

          <div className="weather-current">

            <div className="weather-main">

              <CloudSun
                size={27}
              />

              <span>
                {t(
                  "currentWeather"
                )}
              </span>

              <strong>
                {Math.round(
                  weather
                    .current
                    .temperature_2m
                )}
                °C
              </strong>

              <p>
                {codeLabel(
                  weather
                    .current
                    .weather_code
                )}
              </p>

            </div>


            <Stat
              icon={Sun}
              label={
                t(
                  "feelsLike"
                )
              }
              value={`${Math.round(
                weather
                  .current
                  .apparent_temperature
              )}°C`}
            />


            <Stat
              icon={
                CloudRain
              }
              label={
                t(
                  "humidity"
                )
              }
              value={`${weather.current.relative_humidity_2m}%`}
            />


            <Stat
              icon={Wind}
              label={
                t(
                  "wind"
                )
              }
              value={`${Math.round(
                weather
                  .current
                  .wind_speed_10m
              )} km/h`}
            />

          </div>


          <section className="panel">

            <div className="panel-title">

              <span>
                {t(
                  "sevenDayOutlook"
                )}
              </span>

              <h2>
                {t(
                  "forecast"
                )}
              </h2>

            </div>


            <div className="forecast-grid">

              {days.map(
                (
                  day
                ) => (

                <article
                  key={
                    day.date
                  }
                >

                  <span>
                    {new Date(
                      `${day.date}T00:00:00`
                    ).toLocaleDateString(
                      "en-IN",
                      {
                        weekday:
                          "short",
                      }
                    )}
                  </span>

                  <strong>
                    {Math.round(
                      day.max
                    )}
                    °

                    <small>
                      {Math.round(
                        day.min
                      )}
                      °
                    </small>
                  </strong>

                  <p>
                    {codeLabel(
                      day.code
                    )}
                  </p>

                  <em>
                    {day.rain} mm{" "}
                    {t(
                      "rain"
                    )}
                  </em>

                </article>

              ))}

            </div>

          </section>

        </>
      )}


      {!weather &&
        !loading && (

        <div className="panel empty-panel">

          <CloudSun
            size={30}
          />

          <h3>
            {t(
              "selectLocation"
            )}
          </h3>

          <p>
            {t(
              "forecastAppears"
            )}
          </p>

        </div>

      )}

    </div>
  );
}


function Stat({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="weather-stat">

      <Icon
        size={19}
      />

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}   