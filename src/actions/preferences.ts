"use server";

import { cookies } from "next/headers";

import { City } from "@/types/cities";
import { Preferences } from "@/types/preferences.type";

export async function getPreferences(): Promise<Preferences> {
  const cookieStore = await cookies();

  return {
    city:
      cookieStore.get("city")?.value !== undefined
        ? (JSON.parse(cookieStore.get("city")?.value as string) as City)
        : null,
    email:
      cookieStore.get("email")?.value !== undefined
        ? JSON.parse(cookieStore.get("email")?.value as string)
        : null,
  };
}

export async function setPreferences(
  preferences: Preferences
): Promise<Preferences> {
  const cookieStore = await cookies();

  Object.entries(preferences).forEach(([key, value]) => {
    if (value === null) {
      cookieStore.delete(key);
    } else {
      cookieStore.set({
        name: key,
        value: JSON.stringify(value),
        maxAge: 60 * 60 * 24 * 365 * 1000,
        expires: new Date(Date.now() + 60 * 60 * 24 * 365 * 1000),
      });
    }
  });

  return {
    city:
      cookieStore.get("city")?.value !== undefined
        ? (JSON.parse(cookieStore.get("city")?.value as string) as City)
        : null,
    email:
      cookieStore.get("email")?.value !== undefined
        ? JSON.parse(cookieStore.get("email")?.value as string)
        : null,
  };
}
