"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

import { Movie } from "@/types/movies";

export interface UpcomingShowsMobileProps {
  movies: Movie[];
}

export function UpcomingShowsMobile({ movies }: UpcomingShowsMobileProps) {
  const [emblaRef] = useEmblaCarousel({ skipSnaps: true });

  return (
    <div className="embla relative px-4 pb-11 pt-4 md:hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {movies.map(({ name, languages, poster, rating }, index) => (
          <Link
            href={`/events/${name}`}
            key={name + index}
            className="w-[150px] shrink-0 space-y-2"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={poster}
                alt={name}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full object-cover"
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
                <Image src="/imdb-logo.svg" width={30} height={30} alt="IMDb" />
                <p className="text-xs text-text-sub">{rating}/10</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
