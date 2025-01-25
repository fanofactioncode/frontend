"use server";

import { cookies } from "next/headers";

import { City } from "@/types/cities";
import { Preferences } from "@/types/preferences.type";

export async function getPreferences(): Promise<Preferences> {
  const cookieStore = await cookies();

  const cityCookie = cookieStore.get("city")?.value;
  const emailCookie = cookieStore.get("email")?.value;

  return {
    city: cityCookie ? (safeParseJSON(cityCookie) as City) : null,
    email: emailCookie ? safeParseJSON(emailCookie) : null,
  };
}

function safeParseJSON(value: string): any {
  try {
    return JSON.parse(value);
  } catch (error) {
    console.error("Invalid JSON in cookie:", value, error);
    return null;
  }
}

export async function setPreferences(
  preferences: Preferences
): Promise<Preferences> {
  const cookieStore = await cookies();

  Object.entries(preferences).forEach(([key, value]) => {
    if (value === null) {
      cookieStore.delete(key);
    } else {
      try {
        cookieStore.set({
          name: key,
          value: JSON.stringify(value),
          maxAge: 60 * 60 * 24 * 365 * 1000,
          expires: new Date(Date.now() + 60 * 60 * 24 * 365 * 1000),
        });
      } catch (error) {
        console.error(`Failed to set cookie for key: ${key}`, error);
      }
    }
  });

  return getPreferences();
}
