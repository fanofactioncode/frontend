"use server";

import { cookies } from "next/headers";

import { City } from "@/types/cities";

type Preference = {
  city: City | null;
};

export async function getPreferences(): Promise<{ city: string | null }> {
  const cookieStore = cookies();

  return {
    city: cookieStore.get("city")?.value as string | null,
  };
}

export async function setPreferences(preference: Preference) {
  const cookieStore = cookies();

  Object.entries(preference).forEach(([key, value]) => {
    if (value === null) {
      cookieStore.delete(key);
    } else {
      cookieStore.set(key, JSON.stringify(value));
    }
  });

  return {
    city: cookieStore.get("city")?.value as string | null,
  };
}
