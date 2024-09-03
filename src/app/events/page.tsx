import React from "react";

import NowShowingMovies from "./_components/now-showing-movies";
import UpcomingMovieItem from "./_components/upcoming-movie-item";

export default function EventsPage() {
  return (
    <>
      <NowShowingMovies />
      <div className="container space-y-4 py-14 pt-10">
        <h1 className="text-lg font-bold text-text">Upcoming Events</h1>
        <div className="grid grid-cols-2 gap-5">
          <UpcomingMovieItem
            name="Deadpool & Wolverine"
            languages={["English", "हिन्दी", "தமிழ்"]}
            rating={8}
          />
          <UpcomingMovieItem
            name="Bad Boys: Ride or Die"
            languages={["English", "हिन्दी"]}
            rating={7.5}
          />
          <UpcomingMovieItem
            name="Inside Out 2"
            languages={["English"]}
            rating={8.2}
          />
          <UpcomingMovieItem
            name="Kingdom of the Planet of the Apes"
            languages={["English", "हिन्दी"]}
            rating={6.3}
          />
        </div>
      </div>
    </>
  );
}
