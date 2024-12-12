import env from "@/lib/env";
import { CityResponse } from "@/types/cities";

export async function getCities(): Promise<CityResponse> {
  const response = await fetch(env.NEXT_PUBLIC_API_URL + "/cities");
  return response.json();
}
