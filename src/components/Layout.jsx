import React from "react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  Bell,
  CloudSun,
  FileText,
  Home,
  IndianRupee,
  Languages,
  Leaf,
  LogOut,
  Repeat2,
  Sprout,
} from "lucide-react";

import {
  signOut,
} from "firebase/auth";

import {
  auth,
} from "../firebase";

import {
  useLanguage,
} from "../LanguageContext.jsx";


export default function Layout({
  children,
}) {
  const navigate =
    useNavigate();

  const {
    language,
    setLang,
    t,
    languageOptions,
  } = useLanguage();


  const links = [
    {
      to: "/",
      label: t("home"),
      icon: Home,
    },

    {
      to: "/weather",
      label: t("weather"),
      icon: CloudSun,
    },

    {
      to: "/crops",
      label: t("crops"),
      icon: Leaf,
    },

    {
      to: "/finance",
      label: t("finance"),
      icon: IndianRupee,
    },

    {
      to: "/marketplace",
      label: t("marketplace"),
      icon: Repeat2,
    },

    {
      to: "/reports",
      label: t("reports"),
      icon: FileText,
    },

    {
      to: "/notifications",
      label: t("notifications"),
      icon: Bell,
    },
  ];


  const logout =
    async () => {
      await signOut(
        auth
      );

      navigate(
        "/login"
      );
    };


  return (
    <div className="shell">

      <aside className="sidebar">

        <div className="brand">

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


        <nav className="side-nav">

          {links.map(
            ({
              to,
              label,
              icon: Icon,
            }) => (

              <NavLink
                key={to}
                to={to}
                end={
                  to === "/"
                }
                className={({
                  isActive,
                }) =>
                  isActive
                    ? "side-link active"
                    : "side-link"
                }
              >
                <Icon
                  size={18}
                />

                <span>
                  {label}
                </span>

              </NavLink>

            )
          )}

        </nav>


        <div className="sidebar-language">

          <div className="sidebar-language-label">

            <Languages
              size={15}
            />

            <span>
              Language
            </span>

          </div>


          <select
            value={
              language
            }
            onChange={(
              event
            ) =>
              setLang(
                event.target
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

        </div>


        <button
          className="logout"
          onClick={
            logout
          }
        >
          <LogOut
            size={17}
          />

          {t("signOut")}
        </button>

      </aside>


      <main className="workspace">
        {children}
      </main>


      <nav className="mobile-nav">

        {links.map(
          ({
            to,
            label,
            icon: Icon,
          }) => (

            <NavLink
              key={to}
              to={to}
              end={
                to === "/"
              }
              className={({
                isActive,
              }) =>
                isActive
                  ? "mobile-link active"
                  : "mobile-link"
              }
            >
              <Icon
                size={18}
              />

              <span>
                {label}
              </span>

            </NavLink>

          )
        )}

      </nav>

    </div>
  );
}