"use server";

import { cookies } from "next/headers";

export async function getPreferences(): Promise<{ city: string | null }> {
  const cookieStore = cookies();

  return {
    city: cookieStore.get("city")?.value as string | null,
  };
}
