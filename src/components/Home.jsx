import React, {
  useEffect,
  useState,
} from "react";

import {
  ArrowRight,
  CloudSun,
  FileText,
  IndianRupee,
  Leaf,
  MapPin,
  Sprout,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  doc,
  getDoc,
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


export default function Home() {
  const [
    username,
    setUsername,
  ] = useState("Farmer");

  const {
    location,
  } = useLocation();

  const {
    t,
  } = useLanguage();


  useEffect(() => {
    (async () => {
      const user =
        auth.currentUser;

      if (!user) return;

      const snapshot =
        await getDoc(
          doc(
            db,
            "users",
            user.uid
          )
        );

      if (
        snapshot.exists()
      ) {
        setUsername(
          snapshot
            .data()
            .username ||
            "Farmer"
        );
      }
    })();
  }, []);


  return (
    <div className="page">

      <div className="page-hero">

        <div>

          <span className="eyebrow">
            {t(
              "farmDashboard"
            )}
          </span>

          <h1>
            {t(
              "goodToSeeYou"
            )},{" "}
            {username}.
          </h1>

          <p>
            {t(
              "homeIntro"
            )}
          </p>

        </div>


        <div className="location-pill">

          <MapPin
            size={16}
          />

          {location ||
            t(
              "noLocation"
            )}

        </div>

      </div>


      <div className="feature-grid">

        <Feature
          to="/weather"
          icon={CloudSun}
          title={
            t("weather")
          }
          text={
            t(
              "weatherText"
            )
          }
          openText={
            t("open")
          }
        />

        <Feature
          to="/crops"
          icon={Leaf}
          title={
            t(
              "cropPlanning"
            )
          }
          text={
            t(
              "cropPlanningText"
            )
          }
          openText={
            t("open")
          }
        />

        <Feature
          to="/finance"
          icon={IndianRupee}
          title={
            t("finance")
          }
          text={
            t(
              "financeText"
            )
          }
          openText={
            t("open")
          }
        />

        <Feature
          to="/reports"
          icon={FileText}
          title={
            t("reports")
          }
          text={
            t(
              "reportsText"
            )
          }
          openText={
            t("open")
          }
        />

      </div>


      <section className="info-band">

        <span>
          {t(
            "sharedLocation"
          )}
        </span>

        <strong>
          {location ||
            t(
              "noLocation"
            )}
        </strong>

        <Link to="/weather">

          {t(
            "setLocation"
          )}

          <ArrowRight
            size={16}
          />

        </Link>

      </section>


      <section className="farmer-support-card">

        <div className="support-icon">

          <Sprout
            size={24}
          />

          <span>
            सहायता
          </span>

        </div>


        <div className="support-content">

          <span className="support-kicker">
            {t(
              "assistedAccess"
            )}
          </span>

          <h2>
            {t(
              "supportTitle"
            )}
          </h2>

          <p>
            {t(
              "supportPara1"
            )}
          </p>

          <p>
            {t(
              "supportPara2"
            )}
          </p>

          <div className="support-note">

            <strong>
              {t(
                "panchayatUse"
              )}
            </strong>

            <span>
              {t(
                "panchayatText"
              )}
            </span>

          </div>

        </div>

      </section>

    </div>
  );
}


function Feature({
  to,
  icon: Icon,
  title,
  text,
  openText,
}) {
  return (
    <Link
      className="feature-card"
      to={to}
    >
      <Icon size={22} />

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

      <span>
        {openText}

        <ArrowRight
          size={15}
        />
      </span>
    </Link>
  );
}