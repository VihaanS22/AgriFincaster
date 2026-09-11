import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const LocationContext = createContext(null);

export function LocationProvider({ children }) {
  const [userId, setUserId] = useState(null);
  const [place, setPlaceState] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Reset location whenever the signed-in user changes.
      setPlaceState(null);
      setReady(false);

      if (!user) {
        setUserId(null);
        setReady(true);
        return;
      }

      setUserId(user.uid);

      // Each Firebase user gets a separate saved location.
      const storageKey = `agri-location-${user.uid}`;
      const saved = localStorage.getItem(storageKey);

      if (saved) {
        try {
          setPlaceState(JSON.parse(saved));
        } catch {
          localStorage.removeItem(storageKey);
          setPlaceState(null);
        }
      }

      setReady(true);
    });

    return unsubscribe;
  }, []);

  const setPlace = (next) => {
    setPlaceState(next || null);

    if (!userId) return;

    const storageKey = `agri-location-${userId}`;

    if (next) {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } else {
      localStorage.removeItem(storageKey);
    }
  };

  const clearLocation = () => {
    setPlaceState(null);

    if (userId) {
      localStorage.removeItem(`agri-location-${userId}`);
    }
  };

  const value = useMemo(
    () => ({
      place,
      setPlace,
      clearLocation,
      ready,

      location: place?.label || "",
      state: place?.state || "",
      district: place?.district || place?.city || "",
      city: place?.city || "",
      latitude: place?.latitude ?? null,
      longitude: place?.longitude ?? null,
    }),
    [place, ready, userId]
  );

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error(
      "useLocation must be used inside LocationProvider."
    );
  }

  return context;
}