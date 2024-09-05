"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import Badge from "@/components/ui/badge";

import { UpcomingMovieItemProps } from "../../_components/upcoming-movies/upcoming-movie-item";

function getUpcomingMovies(): UpcomingMovieItemProps[] {
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
    <section className="py-5">
      <div className="container space-y-2">
        <Badge className="rounded-xl">Feature movies</Badge>
        <h2 className="text-lg font-bold text-text">
          You might also intrested in
        </h2>
      </div>

      <div className="embla relative px-4 pb-11 pt-4" ref={emblaRef}>
        <div className="flex gap-4">
          {movies.map(({ name, languages, poster, rating }, index) => (
            <div key={name + index} className="w-[150px] shrink-0 space-y-2">
              <div className="[150px] relative overflow-hidden rounded-lg">
                <Image
                  src={poster}
                  alt={name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-[150px] object-cover"
                />
              </div>
              <div className="space-y-1.5">
                <h2 className="truncate text-sm font-semibold text-text">
                  {name}
                </h2>
                <p className="truncate text-xs text-text-sub">
                  {languages.join(" | ")}
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/imdb-logo.svg"
                    width={30}
                    height={30}
                    alt="IMDb"
                  />
                  <p className="text-xs text-text-sub">{rating}/10</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
