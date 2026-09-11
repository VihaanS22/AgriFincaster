import React, {
  useMemo,
  useState,
} from "react";

import {
  Calculator,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import {
  useLanguage,
} from "../LanguageContext.jsx";


const money = (number) =>
  Number(number || 0).toLocaleString(
    "en-IN",
    {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }
  );


export default function Finance() {
  const {
    t,
  } = useLanguage();


  const [
    price,
    setPrice,
  ] = useState("");


  const [
    production,
    setProduction,
  ] = useState("");


  const [
    expense,
    setExpense,
  ] = useState("");


  const values =
    useMemo(() => {
      const p =
        Number(price);

      const q =
        Number(production);

      const e =
        Number(expense);


      const valid =
        [p, q, e].every(
          Number.isFinite
        ) &&
        p >= 0 &&
        q >= 0 &&
        e >= 0;


      const revenue =
        valid
          ? p * q
          : 0;


      const net =
        revenue - e;


      const margin =
        revenue > 0
          ? (
              net /
              revenue
            ) * 100
          : 0;


      const breakEven =
        q > 0
          ? e / q
          : 0;


      return {
        valid,
        revenue,
        net,
        margin,
        breakEven,
      };

    }, [
      price,
      production,
      expense,
    ]);


  return (
    <div className="page">

      {/* =========================================
          HERO
      ========================================= */}

      <div className="page-hero">

        <div>

          <span className="eyebrow">
            {t("financeKicker")}
          </span>


          <h1>
            {t("financeTitle")}
          </h1>


          <p>
            {t(
              "financeIntro",
              "Estimate revenue, net profit or loss, break-even price and operating margin."
            )}
          </p>

        </div>

      </div>


      <div className="two-col">

        {/* =========================================
            INPUTS
        ========================================= */}

        <section className="panel form-panel">

          <div className="panel-title">

            <span>
              {t(
                "budgetInputs",
                "BUDGET INPUTS"
              )}
            </span>


            <h2>
              {t(
                "seasonEconomics",
                "Season economics"
              )}
            </h2>

          </div>


          <label>

            {t(
              "expectedCropPrice",
              "Expected crop price (₹ / kg)"
            )}

            <input
              type="number"
              min="0"
              value={price}
              onChange={(event) =>
                setPrice(
                  event.target.value
                )
              }
              placeholder={
                t(
                  "examplePrice",
                  "e.g. 28"
                )
              }
            />

          </label>


          <label>

            {t(
              "expectedProduction",
              "Expected production (kg)"
            )}

            <input
              type="number"
              min="0"
              value={production}
              onChange={(event) =>
                setProduction(
                  event.target.value
                )
              }
              placeholder={
                t(
                  "exampleProduction",
                  "e.g. 5000"
                )
              }
            />

          </label>


          <label>

            {t(
              "totalExpenses",
              "Total expenses (₹)"
            )}

            <input
              type="number"
              min="0"
              value={expense}
              onChange={(event) =>
                setExpense(
                  event.target.value
                )
              }
              placeholder={
                t(
                  "exampleExpenses",
                  "e.g. 70000"
                )
              }
            />

          </label>

        </section>


        {/* =========================================
            RESULTS
        ========================================= */}

        <section className="panel result-panel">

          <span className="eyebrow">
            {t(
              "financeSummary",
              "FINANCE SUMMARY"
            )}
          </span>


          <div
            className={
              values.net >= 0
                ? "finance-status profit"
                : "finance-status loss"
            }
          >

            {values.net >= 0 ? (
              <TrendingUp
                size={22}
              />
            ) : (
              <TrendingDown
                size={22}
              />
            )}


            <div>

              <span>
                {values.net >= 0
                  ? t(
                      "expectedProfit",
                      "Expected profit"
                    )
                  : t(
                      "expectedLoss",
                      "Expected loss"
                    )}
              </span>


              <strong>
                {money(
                  Math.abs(
                    values.net
                  )
                )}
              </strong>

            </div>

          </div>


          <div className="result-meta finance-grid">

            <div>

              <span>
                {t("revenue")}
              </span>

              <b>
                {money(
                  values.revenue
                )}
              </b>

            </div>


            <div>

              <span>
                {t("expenses")}
              </span>

              <b>
                {money(
                  expense
                )}
              </b>

            </div>


            <div>

              <span>
                {t("margin")}
              </span>

              <b>
                {values.margin.toFixed(
                  1
                )}
                %
              </b>

            </div>


            <div>

              <span>
                {t(
                  "breakEvenPrice"
                )}
              </span>

              <b>
                {money(
                  values.breakEven
                )}{" "}
                / kg
              </b>

            </div>

          </div>


          <div className="data-note">

            <Calculator
              size={15}
            />

            {t(
              "financePlanningNote",
              "Use conservative price and production assumptions when planning. This calculator does not include taxes, loan interest or price volatility unless entered under expenses."
            )}

          </div>

        </section>

      </div>

    </div>
  );
}