import env from "@/lib/env";
import { TrendingMovie } from "@/types/trending";

export async function getTrendingMovies(): Promise<TrendingMovie[]> {
  const res = await fetch(
    env.NEXT_PUBLIC_API_URL + "/movie-requests/trending",
    { next: { revalidate: 60 } }
  );
  return await res.json();
}
