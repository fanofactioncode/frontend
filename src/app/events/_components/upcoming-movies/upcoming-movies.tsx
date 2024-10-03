import React from "react";

import UpcomingMovieItem, {
  UpcomingMovieItemProps,
} from "./upcoming-movie-item";

async function getUpcomingMovies(): Promise<UpcomingMovieItemProps[]> {
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
      name: "Inside Out 1",
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
    {
      name: "Kingdom of the Planet of the Apes",
      languages: ["English", "हिन्दी"],
      poster: "/assets/planet-of-the-apes-potrate.png",
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

export default async function UpcomingMovies() {
  const movies = await getUpcomingMovies();

  return (
    <div className="container space-y-4 py-14 pt-10">
      <h1 className="text-lg font-bold text-text sm:text-3xl">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-8 md:grid-cols-6">
        {movies.map((movie) => (
          <UpcomingMovieItem key={movie.name} {...movie} />
        ))}
      </div>
    </div>
  );
}
