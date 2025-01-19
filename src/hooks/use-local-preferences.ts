import { useEffect, useState } from "react";

import {
  LOCAL_STORAGE_CITY,
  LOCAL_STORAGE_EMAIL_ADDRESS,
} from "@/config/constants";
import { City } from "@/types/cities";

export function useLocalPreferences() {
  const [preferedCity, setPreferedCity] = useState<City | null>(null);
  const [emalAddress, setEmailAddress] = useState<string | null>(null);

  useEffect(() => {
    const preferedCity = localStorage.getItem(LOCAL_STORAGE_CITY);
    const email = localStorage.getItem(LOCAL_STORAGE_EMAIL_ADDRESS);

    if (preferedCity) {
      setPreferedCity(JSON.parse(preferedCity));
    }

    if (email) {
      setEmailAddress(email);
    }
  }, []);

  function updatePreferedCity(city: City) {
    localStorage.setItem(LOCAL_STORAGE_CITY, JSON.stringify(city));
    setPreferedCity(city);
  }

  function updateEmailAddress(email: string) {
    localStorage.setItem(LOCAL_STORAGE_EMAIL_ADDRESS, email);
    setEmailAddress(email);
  }

  return {
    email: emalAddress,
    city: preferedCity,
    updatePreferedCity,
    updateEmailAddress,
  };
}
