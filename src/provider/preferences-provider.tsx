import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getPreferences,
  setPreferences as setPreferencesAction,
} from "@/actions/preferences";
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
    getPreferences().then(setPreferences);
  }, []);

  const resetPreferences = useCallback(() => {
    setPreferences(defaultPreferences);
  }, []);

  const updatePreferences = useCallback((preferences: Preferences) => {
    setPreferences(preferences);
    setPreferencesAction(preferences);
  }, []);

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
