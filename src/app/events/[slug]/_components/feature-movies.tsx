import { MovieCardProps } from "@/components/common/movie-card";

import { FeatureMoviesMobile } from "./feature-movies-mobile";
import { FeatureMovesDesktop } from "./feature-movie-desktop";

function getUpcomingMovies(): MovieCardProps[] {
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
    {
      name: "Kingdom of the Planet of the Apes",
      languages: ["English", "हिन्दी"],
      poster: "/assets/planet-of-the-apes-potrate.png",
      rating: 8,
    },
  ];
}

export function FeatureMovies() {
  const movies = getUpcomingMovies();

  return (
    <>
      <FeatureMoviesMobile movies={movies} />
      <FeatureMovesDesktop movies={movies} />
    </>
  );
}
