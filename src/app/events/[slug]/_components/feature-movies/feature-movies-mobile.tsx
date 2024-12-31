"use client";

import useEmblaCarousel from "embla-carousel-react";

import MovieCard from "@/components/common/movie-card";
import { Badge } from "@/components/ui/badge";
import { Show } from "@/types/show.type";

export function FeatureMoviesMobile({ shows }: { shows: Show[] }) {
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
          {shows.map(({ movie, id }) => (
            <MovieCard
              key={movie.id}
              id={String(id)}
              className="w-[150px]"
              name={movie.title}
              poster={movie.poster_url ?? ""}
              rating={movie.rating as number}
              languages={[movie.original_language as any]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
