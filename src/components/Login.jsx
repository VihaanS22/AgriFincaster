import React, {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import {
  Sprout,
} from "lucide-react";

import {
  auth,
  db,
} from "../firebase";

import {
  useLanguage,
} from "../LanguageContext.jsx";


export default function Login() {
  const navigate =
    useNavigate();


  const [
    username,
    setUsername,
  ] = useState("");


  const [
    password,
    setPassword,
  ] = useState("");


  const [
    busy,
    setBusy,
  ] = useState(false);


  const [
    error,
    setError,
  ] = useState("");


  const {
    language,
    setLang,
    t,
    languageOptions,
  } = useLanguage();


  useEffect(
    () =>
      auth.onAuthStateChanged(
        (
          user
        ) => {
          if (user) {
            navigate("/");
          }
        }
      ),

    [navigate]
  );


  const submit =
    async (
      event
    ) => {
      event.preventDefault();

      setError("");


      const name =
        username.trim();


      if (
        !name ||
        !password
      ) {
        setError(
          "Enter your username and password."
        );

        return;
      }


      setBusy(
        true
      );


      try {
        const q =
          query(
            collection(
              db,
              "users"
            ),

            where(
              "username",
              "==",
              name
            )
          );


        const snapshot =
          await getDocs(
            q
          );


        if (
          snapshot.empty
        ) {
          throw new Error(
            "No account found with this username."
          );
        }


        const email =
          `${name.replace(
            /\s+/g,
            "_"
          )}@agfc.in`;


        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );


        navigate(
          "/"
        );

      } catch (
        err
      ) {
        setError(
          err?.message?.includes(
            "Firebase"
          )
            ? "Login failed. Check your password and try again."
            : err.message
        );

      } finally {
        setBusy(
          false
        );
      }
    };


  return (
    <div className="auth-page">

      <div className="auth-visual">

        <span className="eyebrow">
          {t("loginKicker")}
        </span>


        <h1>

          {t("loginHero1")}

          <br />

          <em>
            {t("loginHero2")}
          </em>

        </h1>


        <p>
          {t("loginIntro")}
        </p>

      </div>


      <form
        className="auth-card"
        onSubmit={
          submit
        }
      >

        <div className="auth-brand">

          <span className="brand-mark">
            <Sprout
              size={20}
            />
          </span>

          <div>
            <strong>
              AGRI
            </strong>

            <small>
              FINCASTER
            </small>
          </div>

        </div>


        <h2>
          {t("welcomeBack")}
        </h2>


        <p>
          {t("loginSubtitle")}
        </p>


        <label>

          {t("username")}

          <input
            value={
              username
            }
            onChange={(
              event
            ) =>
              setUsername(
                event
                  .target
                  .value
              )
            }
            placeholder={
              t(
                "enterUsername"
              )
            }
            autoComplete="username"
          />

        </label>


        <label>

          {t("password")}

          <input
            type="password"
            value={
              password
            }
            onChange={(
              event
            ) =>
              setPassword(
                event
                  .target
                  .value
              )
            }
            placeholder={
              t(
                "enterPassword"
              )
            }
            autoComplete="current-password"
          />

        </label>


        {error && (

          <div className="form-error">
            {error}
          </div>

        )}


        <button
          className="primary-btn"
          disabled={
            busy
          }
        >

          {busy
            ? t(
                "signingIn"
              )
            : t(
                "signIn"
              )}

        </button>


        <div className="auth-row">

          <span>
            {t("newHere")}
          </span>

          <Link to="/register">
            {t(
              "createAccount"
            )}
          </Link>

        </div>


        <select
          className="language-select"
          value={
            language
          }
          onChange={(
            event
          ) =>
            setLang(
              event
                .target
                .value
            )
          }
        >

          {languageOptions.map(
            (
              option
            ) => (

              <option
                key={
                  option.code
                }
                value={
                  option.code
                }
              >
                {
                  option.label
                }
              </option>

            )
          )}

        </select>

      </form>

    </div>
  );
}