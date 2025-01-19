import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  LOCAL_STORAGE_CITY,
  LOCAL_STORAGE_EMAIL_ADDRESS,
} from "@/config/constants";
import { City } from "@/types/cities";

type Preferences = {
  city: City | null;
  email: string | null;
};

type PreferencesContextProps = {
  preferences: Preferences;
  setPreferences: (preferences: Preferences) => void;
  resetPreferences: () => void;
};

const PreferencesContext = createContext<PreferencesContextProps | null>(null);

export function usePreferences() {
  const context = useContext<PreferencesContextProps | null>(
    PreferencesContext
  );

  if (!context) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }

  return context;
}

const defaultPreferences: Preferences = {
  city: null,
  email: null,
};

export function PreferencesProvider({ children }: React.PropsWithChildren) {
  const [preferences, setPreferences] =
    useState<Preferences>(defaultPreferences);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cityItem = localStorage.getItem(LOCAL_STORAGE_CITY);
      const city = cityItem ? JSON.parse(cityItem) : null;

      const emailItem = localStorage.getItem(LOCAL_STORAGE_EMAIL_ADDRESS);
      const email = emailItem ? JSON.parse(emailItem) : null;

      setPreferences({ city, email });
    }
  }, []);

  const resetPreferences = useCallback(() => {
    setPreferences(defaultPreferences);
  }, []);

  const updatePreferences = useCallback(
    (preferences: Preferences) => {
      setPreferences(preferences);

      if (typeof window !== "undefined") {
        localStorage.setItem(
          LOCAL_STORAGE_CITY,
          JSON.stringify(preferences.city)
        );
        localStorage.setItem(
          LOCAL_STORAGE_EMAIL_ADDRESS,
          JSON.stringify(preferences.email)
        );
      }
    },
    [setPreferences]
  );

  const value: PreferencesContextProps = useMemo(() => {
    return {
      preferences,
      setPreferences: updatePreferences,
      resetPreferences,
    };
  }, [preferences, updatePreferences, resetPreferences]);

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}
