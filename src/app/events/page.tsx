import React from "react";

import NowShowingMovies from "./_components/now-showing-movies";
import UpcomingMovieItem, {
  UpcomingMovieItemProps,
} from "./_components/upcoming-movie-item";

async function getUpcommingMovies(): Promise<UpcomingMovieItemProps[]> {
  return [
    {
      name: "Deadpool & Wolverine",
      languages: ["English", "हिन्दी", "தமிழ்"],
      poster: "/assets/deadpool-and-wolverine.png",
      rating: 8,
    },
    {
      name: "Bad Boys: Ride or Die",
      languages: ["English", "हिन्दी", "தமிழ்"],
      poster: "/assets/bad-boys-ride-or-die.png",
      rating: 8,
    },
    {
      name: "Inside Out 2",
      languages: ["English"],
      poster: "/assets/inside-out.png",
      rating: 8,
    },
    {
      name: "Kingdom of the Planet of the Apes",
      languages: ["English", "हिन्दी"],
      poster: "/assets/planet-of-the-apes-potrate.png",
      rating: 8,
    },
  ];
}

export default async function EventsPage() {
  const upcommingMovies = await getUpcommingMovies();

  return (
    <>
      <NowShowingMovies />
      <div className="container space-y-4 py-14 pt-10">
        <h1 className="text-lg font-bold text-text">Upcoming Events</h1>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10">
          {upcommingMovies.map((movie) => (
            <UpcomingMovieItem key={movie.name} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
}
