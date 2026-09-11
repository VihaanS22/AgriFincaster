import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageSquare,
  Plus,
  RotateCcw,
  Search,
  Send,
  Trash2,
  X,
  XCircle,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase";

import {
  useLanguage,
} from "../LanguageContext.jsx";


export default function Marketplace() {
  const user =
    auth.currentUser;

  const navigate =
    useNavigate();

  const {
    t,
  } = useLanguage();


  const [
    listings,
    setListings,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    viewMode,
    setViewMode,
  ] = useState("all");

  const [
    showCreate,
    setShowCreate,
  ] = useState(false);

  const [
    showOffer,
    setShowOffer,
  ] = useState(false);

  const [
    selectedListing,
    setSelectedListing,
  ] = useState(null);

  const [
    error,
    setError,
  ] = useState("");

  const [
    actionMessage,
    setActionMessage,
  ] = useState("");

  const [
    form,
    setForm,
  ] = useState({
    haveItem: "",
    wantItem: "",
    description: "",
    condition: "",
    location: "",
    contact: "",
  });

  const [
    counterOffer,
    setCounterOffer,
  ] = useState("");

  const [
    offerContact,
    setOfferContact,
  ] = useState("");


  // ========================================================
  // LOAD LISTINGS
  // ========================================================

  useEffect(() => {
    const q =
      query(
        collection(
          db,
          "barterRequests"
        ),
        orderBy(
          "createdAt",
          "desc"
        )
      );

    const unsubscribe =
      onSnapshot(
        q,
        (
          snapshot
        ) => {
          setListings(
            snapshot.docs.map(
              (
                item
              ) => ({
                id:
                  item.id,
                ...item.data(),
              })
            )
          );

          setLoading(
            false
          );
        },
        (
          err
        ) => {
          console.error(
            err
          );

          setLoading(
            false
          );
        }
      );

    return unsubscribe;
  }, []);


  // ========================================================
  // FILTER
  // ========================================================

  const visibleListings =
    useMemo(() => {
      let result =
        [...listings];

      if (
        viewMode ===
        "all"
      ) {
        result =
          result.filter(
            (
              item
            ) =>
              (
                item.status ||
                "active"
              ) ===
              "active"
          );
      }

      if (
        viewMode ===
        "mine"
      ) {
        result =
          result.filter(
            (
              item
            ) =>
              item.ownerId ===
              user?.uid
          );
      }

      const text =
        search
          .trim()
          .toLowerCase();

      if (text) {
        result =
          result.filter(
            (
              item
            ) =>
              [
                item.haveItem,
                item.wantItem,
                item.description,
                item.condition,
                item.location,
                item.ownerName,
                item.status,
              ]
                .filter(
                  Boolean
                )
                .join(" ")
                .toLowerCase()
                .includes(
                  text
                )
          );
      }

      return result;

    }, [
      listings,
      search,
      viewMode,
      user?.uid,
    ]);


  const activeCount =
    useMemo(
      () =>
        listings.filter(
          (
            item
          ) =>
            (
              item.status ||
              "active"
            ) ===
            "active"
        ).length,
      [listings]
    );


  const myCount =
    useMemo(
      () =>
        listings.filter(
          (
            item
          ) =>
            item.ownerId ===
            user?.uid
        ).length,
      [
        listings,
        user?.uid,
      ]
    );


  // ========================================================
  // GET FARMER NAME
  // ========================================================

  const getFarmerName =
    async () => {
      if (!user) {
        return "Farmer";
      }

      try {
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
          const data =
            snapshot.data();

          return (
            data.name ||
            data.username ||
            data.fullName ||
            user.email
              ?.split("@")[0] ||
            "Farmer"
          );
        }

      } catch (
        err
      ) {
        console.warn(
          err
        );
      }

      return (
        user.email
          ?.split("@")[0] ||
        "Farmer"
      );
    };


  // ========================================================
  // CREATE
  // ========================================================

  const createRequest =
    async (
      event
    ) => {
      event.preventDefault();

      if (!user) return;

      if (
        !form.haveItem.trim() ||
        !form.wantItem.trim() ||
        !form.location.trim() ||
        !form.contact.trim()
      ) {
        setError(
          t(
            "barterFormError",
            "Please enter what you have, what you need, your location and contact details."
          )
        );

        return;
      }

      try {
        setError("");
        setActionMessage("");

        const ownerName =
          await getFarmerName();

        await addDoc(
          collection(
            db,
            "barterRequests"
          ),
          {
            ownerId:
              user.uid,

            ownerName,

            ownerEmail:
              user.email ||
              "",

            ownerContact:
              form.contact.trim(),

            haveItem:
              form.haveItem.trim(),

            wantItem:
              form.wantItem.trim(),

            description:
              form.description.trim(),

            condition:
              form.condition.trim(),

            location:
              form.location.trim(),

            status:
              "active",

            createdAt:
              serverTimestamp(),
          }
        );

        setForm({
          haveItem: "",
          wantItem: "",
          description: "",
          condition: "",
          location: "",
          contact: "",
        });

        setShowCreate(
          false
        );

        setViewMode(
          "mine"
        );

        setActionMessage(
          t(
            "requestPublished"
          )
        );

      } catch (
        err
      ) {
        console.error(
          err
        );

        setError(
          t(
            "barterCreateError",
            "Could not create the barter request."
          )
        );
      }
    };


  // ========================================================
  // CLOSE
  // ========================================================

  const closeRequest =
    async (
      listing
    ) => {
      if (
        listing.ownerId !==
        user?.uid
      ) {
        return;
      }

      try {
        await updateDoc(
          doc(
            db,
            "barterRequests",
            listing.id
          ),
          {
            status:
              "closed",

            closedAt:
              serverTimestamp(),
          }
        );

        setActionMessage(
          t(
            "requestClosed"
          )
        );

      } catch (
        err
      ) {
        console.error(
          err
        );
      }
    };


  // ========================================================
  // REOPEN
  // ========================================================

  const reopenRequest =
    async (
      listing
    ) => {
      if (
        listing.ownerId !==
        user?.uid
      ) {
        return;
      }

      try {
        await updateDoc(
          doc(
            db,
            "barterRequests",
            listing.id
          ),
          {
            status:
              "active",

            reopenedAt:
              serverTimestamp(),
          }
        );

        setActionMessage(
          t(
            "requestReopened"
          )
        );

      } catch (
        err
      ) {
        console.error(
          err
        );
      }
    };


  // ========================================================
  // DELETE
  // ========================================================

  const deleteRequest =
    async (
      listing
    ) => {
      if (
        listing.ownerId !==
        user?.uid
      ) {
        return;
      }

      const confirmed =
        window.confirm(
          `${t(
            "delete"
          )}: ${listing.haveItem}?`
        );

      if (!confirmed) {
        return;
      }

      try {
        await deleteDoc(
          doc(
            db,
            "barterRequests",
            listing.id
          )
        );

        setActionMessage(
          t(
            "requestDeleted"
          )
        );

      } catch (
        err
      ) {
        console.error(
          err
        );
      }
    };


  // ========================================================
  // OFFER
  // ========================================================

  const openOffer =
    (
      listing
    ) => {
      setSelectedListing(
        listing
      );

      setCounterOffer(
        ""
      );

      setOfferContact(
        ""
      );

      setError(
        ""
      );

      setShowOffer(
        true
      );
    };


  const submitOffer =
    async () => {
      if (
        !user ||
        !selectedListing
      ) {
        return;
      }

      if (
        selectedListing.ownerId ===
        user.uid
      ) {
        return;
      }

      if (
        !counterOffer.trim()
      ) {
        setError(
          t(
            "offerTextError",
            "Tell the farmer what you can offer."
          )
        );

        return;
      }

      if (
        !offerContact.trim()
      ) {
        setError(
          t(
            "offerContactError",
            "Please enter your contact details."
          )
        );

        return;
      }

      try {
        setError("");

        const farmerName =
          await getFarmerName();

        const offerRef =
          await addDoc(
            collection(
              db,
              "barterOffers"
            ),
            {
              requestId:
                selectedListing.id,

              requestOwnerId:
                selectedListing.ownerId,

              requestTitle:
                selectedListing.haveItem,

              offeredById:
                user.uid,

              offeredByName:
                farmerName,

              offeredByEmail:
                user.email ||
                "",

              offerText:
                counterOffer.trim(),

              offerContact:
                offerContact.trim(),

              ownerContact:
                selectedListing
                  .ownerContact ||
                "",

              status:
                "pending",

              createdAt:
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
              selectedListing.ownerId,

            type:
              "barter_offer",

            requestId:
              selectedListing.id,

            offerId:
              offerRef.id,

            title:
              "New barter offer",

            message:
              `${farmerName} made an offer for ${selectedListing.haveItem}.`,

            read:
              false,

            createdAt:
              serverTimestamp(),
          }
        );

        setShowOffer(
          false
        );

        setSelectedListing(
          null
        );

        setCounterOffer(
          ""
        );

        setOfferContact(
          ""
        );

        setActionMessage(
          t(
            "offerSent"
          )
        );

      } catch (
        err
      ) {
        console.error(
          err
        );
      }
    };


  return (
    <div className="marketplace-page">

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


      <section className="marketplace-hero">

        <div>

          <span className="page-kicker">
            {t(
              "farmerExchange"
            )}
          </span>

          <h1>
            {t(
              "barterTitle1"
            )}

            <span>
              {t(
                "barterTitle2"
              )}
            </span>
          </h1>

          <p>
            {t(
              "barterIntro"
            )}
          </p>

        </div>


        <button
          className="market-primary-button"
          onClick={() => {
            setError("");
            setShowCreate(
              true
            );
          }}
        >
          <Plus
            size={18}
          />

          {t(
            "createBarterRequest"
          )}
        </button>

      </section>


      <div className="market-tabs">

        <button
          className={
            viewMode ===
            "all"
              ? "market-tab active"
              : "market-tab"
          }
          onClick={() =>
            setViewMode(
              "all"
            )
          }
        >
          {t(
            "publicMarketplace"
          )}

          <span>
            {activeCount}
          </span>
        </button>


        <button
          className={
            viewMode ===
            "mine"
              ? "market-tab active"
              : "market-tab"
          }
          onClick={() =>
            setViewMode(
              "mine"
            )
          }
        >
          {t(
            "myBarterRequests"
          )}

          <span>
            {myCount}
          </span>
        </button>

      </div>


      {actionMessage && (
        <div className="market-action-message">
          <CheckCircle2
            size={16}
          />

          {actionMessage}
        </div>
      )}


      <section className="market-toolbar">

        <div className="market-search">

          <Search
            size={18}
          />

          <input
            value={
              search
            }
            placeholder={
              viewMode ===
              "mine"
                ? t(
                    "searchMyRequests"
                  )
                : t(
                    "searchMarketplace"
                  )
            }
            onChange={(
              event
            ) =>
              setSearch(
                event.target.value
              )
            }
          />

        </div>

        <span>
          {
            visibleListings.length
          }{" "}
          {viewMode ===
          "mine"
            ? t(
                "requests"
              )
            : t(
                "activeRequests"
              )}
        </span>

      </section>


      {loading ? (

        <div className="market-empty">
          {t(
            "loading"
          )}
        </div>

      ) : visibleListings.length ===
        0 ? (

        <div className="market-empty">

          <MessageSquare
            size={30}
          />

          <h3>
            {viewMode ===
            "mine"
              ? t(
                  "noOwnBarterRequests"
                )
              : t(
                  "noBarterRequests"
                )}
          </h3>

          <p>
            {viewMode ===
            "mine"
              ? t(
                  "createOwnRequest"
                )
              : t(
                  "createFirstRequest"
                )}
          </p>

        </div>

      ) : (

        <section className="market-grid">

          {visibleListings.map(
            (
              listing
            ) => {
              const mine =
                listing.ownerId ===
                user?.uid;

              const status =
                listing.status ||
                "active";

              return (
                <article
                  key={
                    listing.id
                  }
                  className={
                    `barter-card barter-card-${status}`
                  }
                >

                  <div className="barter-card-top">

                    <span
                      className={
                        `barter-status ${status}`
                      }
                    >
                      {status}
                    </span>

                    {listing.location && (
                      <span className="barter-location">
                        <MapPin
                          size={13}
                        />

                        {
                          listing.location
                        }
                      </span>
                    )}

                  </div>


                  <div className="barter-owner">

                    <span>
                      {t(
                        "offeredBy"
                      )}
                    </span>

                    <strong>
                      {
                        listing.ownerName ||
                        "Farmer"
                      }
                    </strong>

                  </div>


                  <div className="barter-exchange">

                    <div>
                      <span>
                        {t(
                          "iHave"
                        )}
                      </span>

                      <h3>
                        {
                          listing.haveItem
                        }
                      </h3>
                    </div>


                    <ArrowRight
                      size={18}
                    />


                    <div>
                      <span>
                        {t(
                          "iNeed"
                        )}
                      </span>

                      <h3>
                        {
                          listing.wantItem
                        }
                      </h3>
                    </div>

                  </div>


                  {listing.condition && (
                    <div className="barter-info">

                      <span>
                        {t(
                          "condition"
                        )}
                      </span>

                      <p>
                        {
                          listing.condition
                        }
                      </p>

                    </div>
                  )}


                  {listing.description && (
                    <p className="barter-description">
                      {
                        listing.description
                      }
                    </p>
                  )}


                  {mine ? (

                    <div className="owner-request-area">

                      <div className="owner-badge">
                        {t(
                          "yourBarterRequest"
                        )}
                      </div>


                      {status ===
                        "active" && (

                        <div className="owner-request-actions">

                          <button
                            className="close-request-button"
                            onClick={() =>
                              closeRequest(
                                listing
                              )
                            }
                          >
                            <XCircle
                              size={15}
                            />

                            {t(
                              "closeRequest"
                            )}
                          </button>


                          <button
                            className="delete-request-button"
                            onClick={() =>
                              deleteRequest(
                                listing
                              )
                            }
                          >
                            <Trash2
                              size={15}
                            />

                            {t(
                              "delete"
                            )}
                          </button>

                        </div>

                      )}


                      {status ===
                        "closed" && (

                        <div className="owner-request-actions">

                          <button
                            className="reopen-request-button"
                            onClick={() =>
                              reopenRequest(
                                listing
                              )
                            }
                          >
                            <RotateCcw
                              size={15}
                            />

                            {t(
                              "reopenRequest"
                            )}
                          </button>


                          <button
                            className="delete-request-button"
                            onClick={() =>
                              deleteRequest(
                                listing
                              )
                            }
                          >
                            <Trash2
                              size={15}
                            />

                            {t(
                              "delete"
                            )}
                          </button>

                        </div>

                      )}


                      {status ===
                        "matched" && (

                        <div className="matched-request-note">

                          <CheckCircle2
                            size={16}
                          />

                          {t(
                            "matchedMessage"
                          )}

                        </div>

                      )}

                    </div>

                  ) : (

                    <button
                      className="counter-offer-button"
                      onClick={() =>
                        openOffer(
                          listing
                        )
                      }
                    >
                      {t(
                        "makeCounterOffer"
                      )}

                      <ArrowRight
                        size={16}
                      />
                    </button>

                  )}

                </article>
              );
            }
          )}

        </section>

      )}


      {/* CREATE MODAL */}

      {showCreate && (

        <div className="market-modal-backdrop">

          <div className="market-modal">

            <div className="market-modal-header">

              <div>
                <span className="page-kicker">
                  {t(
                    "newRequest"
                  )}
                </span>

                <h2>
                  {t(
                    "createRequest"
                  )}
                </h2>
              </div>

              <button
                className="icon-button"
                onClick={() => {
                  setShowCreate(
                    false
                  );

                  setError("");
                }}
              >
                <X
                  size={20}
                />
              </button>

            </div>


            <form
              onSubmit={
                createRequest
              }
            >

              <label>
                {t(
                  "whatDoYouHave"
                )}

                <input
                  value={
                    form.haveItem
                  }
                  onChange={(
                    event
                  ) =>
                    setForm({
                      ...form,
                      haveItem:
                        event.target.value,
                    })
                  }
                />
              </label>


              <label>
                {t(
                  "whatLookingFor"
                )}

                <input
                  value={
                    form.wantItem
                  }
                  onChange={(
                    event
                  ) =>
                    setForm({
                      ...form,
                      wantItem:
                        event.target.value,
                    })
                  }
                />
              </label>


              <label>
                {t(
                  "condition"
                )}

                <input
                  value={
                    form.condition
                  }
                  onChange={(
                    event
                  ) =>
                    setForm({
                      ...form,
                      condition:
                        event.target.value,
                    })
                  }
                />
              </label>


              <label>
                {t(
                  "location"
                )}

                <input
                  value={
                    form.location
                  }
                  onChange={(
                    event
                  ) =>
                    setForm({
                      ...form,
                      location:
                        event.target.value,
                    })
                  }
                />
              </label>


              <label>
                {t(
                  "contactDetails"
                )}

                <input
                  value={
                    form.contact
                  }
                  onChange={(
                    event
                  ) =>
                    setForm({
                      ...form,
                      contact:
                        event.target.value,
                    })
                  }
                />
              </label>


              <label>
                {t(
                  "description"
                )}

                <textarea
                  rows="4"
                  value={
                    form.description
                  }
                  onChange={(
                    event
                  ) =>
                    setForm({
                      ...form,
                      description:
                        event.target.value,
                    })
                  }
                />
              </label>


              {error && (
                <p className="market-error">
                  {error}
                </p>
              )}


              <button className="market-primary-button full">
                {t(
                  "publishRequest"
                )}

                <ArrowRight
                  size={17}
                />
              </button>

            </form>

          </div>

        </div>

      )}


      {/* COUNTER OFFER MODAL */}

      {showOffer &&
        selectedListing && (

        <div className="market-modal-backdrop">

          <div className="market-modal">

            <div className="market-modal-header">

              <div>
                <span className="page-kicker">
                  {t(
                    "counterOffer"
                  )}
                </span>

                <h2>
                  {
                    selectedListing.haveItem
                  }
                </h2>
              </div>

              <button
                className="icon-button"
                onClick={() => {
                  setShowOffer(
                    false
                  );

                  setError("");
                }}
              >
                <X
                  size={20}
                />
              </button>

            </div>


            <div className="offer-summary">

              <span>
                {t(
                  "theyWant"
                )}
              </span>

              <strong>
                {
                  selectedListing.wantItem
                }
              </strong>

            </div>


            <label className="market-textarea-label">

              {t(
                "whatCanOffer"
              )}

              <textarea
                rows="5"
                value={
                  counterOffer
                }
                onChange={(
                  event
                ) =>
                  setCounterOffer(
                    event.target.value
                  )
                }
              />

            </label>


            <label className="market-textarea-label">

              {t(
                "yourContactDetails"
              )}

              <input
                value={
                  offerContact
                }
                onChange={(
                  event
                ) =>
                  setOfferContact(
                    event.target.value
                  )
                }
              />

            </label>


            {error && (
              <p className="market-error">
                {error}
              </p>
            )}


            <button
              className="market-primary-button full"
              onClick={
                submitOffer
              }
            >
              <Send
                size={17}
              />

              {t(
                "sendCounterOffer"
              )}
            </button>

          </div>

        </div>

      )}

    </div>
  );
}