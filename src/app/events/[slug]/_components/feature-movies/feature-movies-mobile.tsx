"use client";

import useEmblaCarousel from "embla-carousel-react";

import MovieCard, { type MovieCardProps } from "@/components/common/movie-card";
import { Badge } from "@/components/ui/badge";

export function FeatureMoviesMobile({ movies }: { movies: MovieCardProps[] }) {
  const [emblaRef] = useEmblaCarousel({
    skipSnaps: true,
  });

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
            <MovieCard key={movie.name} className="w-[150px]" {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
