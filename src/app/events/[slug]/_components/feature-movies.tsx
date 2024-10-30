"use client";

import useEmblaCarousel from "embla-carousel-react";

import { Badge } from "@/components/ui/badge";
import MovieCard, { type MovieCardProps } from "@/components/common/movie-card";

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
  ];
}

export default function FeatureMovies() {
  const [emblaRef] = useEmblaCarousel({
    skipSnaps: true,
  });

  const movies = getUpcomingMovies();

  return (
    <section className="py-5 sm:hidden">
      <div className="container space-y-2">
        <Badge className="rounded-xl">Feature movies</Badge>
        <h2 className="text-lg font-bold text-text">
          You might also intrested in
        </h2>
      </div>

      <div className="embla relative px-4 pb-11 pt-4" ref={emblaRef}>
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.name} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
