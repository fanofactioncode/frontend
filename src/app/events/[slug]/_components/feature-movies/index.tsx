import { Pagination } from "@/types/pagination";
import { Show } from "@/types/show.type";

import { FeatureMovesDesktop } from "./feature-movie-desktop";
import { FeatureMoviesMobile } from "./feature-movies-mobile";

async function getUpcomingMovies(): Promise<Pagination<Show>> {
  const url = "https://dev-api-v2.fanofaction.com/shows?limit=5";
  const options = {
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

export async function FeatureMovies() {
  const { data: shows } = await getUpcomingMovies();

  return (
    <>
      <FeatureMoviesMobile shows={shows} />
      <FeatureMovesDesktop shows={shows} />
    </>
  );
}
