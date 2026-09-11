import React, {
  useEffect,
  useState,
} from "react";

import {
  ArrowLeft,
  Bell,
  Check,
  X,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase";

import {
  useLanguage,
} from "../LanguageContext.jsx";


export default function Notifications() {
  const user =
    auth.currentUser;

  const navigate =
    useNavigate();

  const {
    t,
  } = useLanguage();


  const [
    notifications,
    setNotifications,
  ] = useState([]);

  const [
    offers,
    setOffers,
  ] = useState({});

  const [
    loading,
    setLoading,
  ] = useState(true);


  // ========================================================
  // LOAD
  // ========================================================

  useEffect(() => {
    if (!user) {
      setNotifications([]);
      setOffers({});
      setLoading(false);

      return;
    }

    const notificationsQuery =
      query(
        collection(
          db,
          "notifications"
        ),
        where(
          "userId",
          "==",
          user.uid
        )
      );

    const unsubscribe =
      onSnapshot(
        notificationsQuery,
        async (
          snapshot
        ) => {
          const rows =
            snapshot.docs
              .map(
                (
                  item
                ) => ({
                  id:
                    item.id,
                  ...item.data(),
                })
              )
              .sort(
                (
                  a,
                  b
                ) => {
                  const aTime =
                    a.createdAt
                      ?.toMillis?.() ||
                    0;

                  const bTime =
                    b.createdAt
                      ?.toMillis?.() ||
                    0;

                  return (
                    bTime -
                    aTime
                  );
                }
              );

          setNotifications(
            rows
          );


          const entries =
            await Promise.all(
              rows
                .filter(
                  (
                    item
                  ) =>
                    item.offerId
                )
                .map(
                  async (
                    item
                  ) => {
                    try {
                      const snapshot =
                        await getDoc(
                          doc(
                            db,
                            "barterOffers",
                            item.offerId
                          )
                        );

                      if (
                        !snapshot.exists()
                      ) {
                        return null;
                      }

                      return [
                        item.offerId,
                        {
                          id:
                            snapshot.id,
                          ...snapshot.data(),
                        },
                      ];

                    } catch {
                      return null;
                    }
                  }
                )
            );

          setOffers(
            Object.fromEntries(
              entries.filter(
                Boolean
              )
            )
          );

          setLoading(
            false
          );
        },
        (
          error
        ) => {
          console.error(
            error
          );

          setLoading(
            false
          );
        }
      );

    return unsubscribe;

  }, [user]);


  // ========================================================
  // RESPOND TO OFFER
  // ========================================================

  const respond =
    async (
      notification,
      status
    ) => {
      const offer =
        offers[
          notification
            .offerId
        ];

      if (!offer) {
        return;
      }

      try {
        await updateDoc(
          doc(
            db,
            "barterOffers",
            offer.id
          ),
          {
            status,
          }
        );

        await updateDoc(
          doc(
            db,
            "notifications",
            notification.id
          ),
          {
            read:
              true,
          }
        );


        setOffers(
          (
            current
          ) => ({
            ...current,

            [offer.id]: {
              ...current[
                offer.id
              ],
              status,
            },
          })
        );


        setNotifications(
          (
            current
          ) =>
            current.map(
              (
                item
              ) =>
                item.id ===
                notification.id
                  ? {
                      ...item,
                      read: true,
                    }
                  : item
            )
        );


        // ==================================================
        // ACCEPT
        // ==================================================

        if (
          status ===
          "accepted"
        ) {
          await updateDoc(
            doc(
              db,
              "barterRequests",
              notification.requestId
            ),
            {
              status:
                "matched",

              matchedOfferId:
                offer.id,

              matchedAt:
                serverTimestamp(),
            }
          );


          await addDoc(
            collection(
              db,
              "notifications"
            ),
            {
              userId:
                offer.offeredById,

              type:
                "barter_offer_accepted",

              requestId:
                notification.requestId,

              offerId:
                offer.id,

              title:
                "Barter offer accepted",

              message:
                `Your offer for ${offer.requestTitle} was accepted.`,

              contactDetails:
                offer.ownerContact ||
                "",

              read:
                false,

              createdAt:
                serverTimestamp(),
            }
          );

        } else {

          // ==================================================
          // DECLINE
          // ==================================================

          await addDoc(
            collection(
              db,
              "notifications"
            ),
            {
              userId:
                offer.offeredById,

              type:
                "barter_offer_declined",

              requestId:
                notification.requestId,

              offerId:
                offer.id,

              title:
                "Barter offer declined",

              message:
                `Your offer for ${offer.requestTitle} was declined.`,

              read:
                false,

              createdAt:
                serverTimestamp(),
            }
          );
        }

      } catch (
        error
      ) {
        console.error(
          error
        );
      }
    };


  // ========================================================
  // LOADING
  // ========================================================

  if (loading) {
    return (
      <div className="notifications-page">

        <button
          className="page-back-button"
          onClick={() =>
            navigate("/")
          }
        >
          <ArrowLeft
            size={16}
          />

          {t(
            "backHome"
          )}
        </button>

        {t(
          "loading"
        )}

      </div>
    );
  }


  return (
    <div className="notifications-page">

      <button
        className="page-back-button"
        onClick={() =>
          navigate("/")
        }
      >
        <ArrowLeft
          size={16}
        />

        {t(
          "backHome"
        )}
      </button>


      <section className="notification-header">

        <div>

          <span className="page-kicker">
            {t(
              "notificationsKicker"
            )}
          </span>

          <h1>
            {t(
              "barterActivity"
            )}
          </h1>

          <p>
            {t(
              "barterActivityIntro"
            )}
          </p>

        </div>


        <Bell
          size={30}
        />

      </section>


      {notifications.length ===
      0 ? (

        <div className="market-empty">

          <Bell
            size={30}
          />

          <h3>
            {t(
              "noNotifications"
            )}
          </h3>

          <p>
            {t(
              "newOffersAppear"
            )}
          </p>

        </div>

      ) : (

        <section className="notification-list">

          {notifications.map(
            (
              notification
            ) => {

              const offer =
                offers[
                  notification
                    .offerId
                ];


              return (

                <article
                  key={
                    notification.id
                  }
                  className={
                    `notification-card ${
                      notification.read
                        ? "read"
                        : "unread"
                    }`
                  }
                >

                  <div className="notification-top">

                    <div>

                      <span>
                        {
                          notification.title ||
                          t(
                            "notifications"
                          )
                        }
                      </span>

                      <h3>
                        {
                          notification.message
                        }
                      </h3>

                    </div>


                    {offer && (

                      <span
                        className={
                          `offer-status ${offer.status}`
                        }
                      >
                        {
                          offer.status
                        }
                      </span>

                    )}

                  </div>


                  {/* ========================================
                      INCOMING OFFER
                  ======================================== */}

                  {offer &&
                    notification.type ===
                      "barter_offer" && (

                    <div className="incoming-offer">

                      <span>
                        {t(
                          "incomingCounterOffer"
                        )}
                      </span>

                      <strong>
                        {
                          offer.offerText
                        }
                      </strong>

                      <small>
                        {t(
                          "offeredBy"
                        )}{" "}
                        {
                          offer.offeredByName
                        }
                      </small>

                    </div>

                  )}


                  {/* ========================================
                      OWNER GETS OFFERER CONTACT
                  ======================================== */}

                  {offer?.status ===
                    "accepted" &&
                    notification.type ===
                      "barter_offer" && (

                    <div className="matched-contact">

                      <span>
                        {t(
                          "matchedFarmerContact"
                        )}
                      </span>

                      <strong>
                        {
                          offer.offerContact ||
                          t(
                            "contactNotProvided"
                          )
                        }
                      </strong>

                      <small>
                        {t(
                          "arrangeExchange"
                        )}
                      </small>

                    </div>

                  )}


                  {/* ========================================
                      OFFERER GETS OWNER CONTACT
                  ======================================== */}

                  {notification.type ===
                    "barter_offer_accepted" && (

                    <div className="matched-contact">

                      <span>
                        {t(
                          "barterPartnerContact"
                        )}
                      </span>

                      <strong>
                        {
                          notification.contactDetails ||
                          t(
                            "contactNotProvided"
                          )
                        }
                      </strong>

                      <small>
                        {t(
                          "arrangeExchange"
                        )}
                      </small>

                    </div>

                  )}


                  {/* ========================================
                      ACTIONS
                  ======================================== */}

                  {offer?.status ===
                    "pending" &&
                    notification.type ===
                      "barter_offer" && (

                    <div className="notification-actions">

                      <button
                        className="accept-offer"
                        onClick={() =>
                          respond(
                            notification,
                            "accepted"
                          )
                        }
                      >
                        <Check
                          size={16}
                        />

                        {t(
                          "accept"
                        )}
                      </button>


                      <button
                        className="decline-offer"
                        onClick={() =>
                          respond(
                            notification,
                            "declined"
                          )
                        }
                      >
                        <X
                          size={16}
                        />

                        {t(
                          "decline"
                        )}
                      </button>

                    </div>

                  )}

                </article>
              );
            }
          )}

        </section>

      )}

    </div>
  );
}