import React, { Suspense } from "react";

import UpcomingMoviesSkeleton from "@/components/skeleton/events/upcoming-movies-skeleton";

import Movies from "./movies";

export default async function UpcomingMovies() {
  return (
    <div className="container space-y-4 py-14 pt-10">
      <h1 className="text-lg font-bold text-text sm:text-3xl">
        Upcoming Events
      </h1>
      <Suspense fallback={<UpcomingMoviesSkeleton />}>
        <Movies />
      </Suspense>
    </div>
  );
}
