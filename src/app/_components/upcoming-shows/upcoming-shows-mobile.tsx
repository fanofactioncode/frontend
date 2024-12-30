"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

import { Pagination } from "@/types/pagination";
import { Show } from "@/types/show.type";

export interface UpcomingShowsMobileProps {
  getShows: Promise<Pagination<Show>>;
}

export function UpcomingShowsMobile({ getShows }: UpcomingShowsMobileProps) {
  const shows = use(getShows);
  const [emblaRef] = useEmblaCarousel({ skipSnaps: true });

  return (
    <div className="embla relative px-4 pb-11 pt-4 md:hidden" ref={emblaRef}>
      <div className="flex gap-4">
        {shows?.data?.map(({ id, movie }) => (
          <Link
            href={`/events/${id}`}
            key={id}
            className="w-[150px] shrink-0 space-y-2"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={movie.poster_url ?? ""}
                alt={movie.title}
                width={0}
                height={0}
                sizes="100vw"
                className="h-[240px] w-full object-cover"
              />
            </div>
            <div className="space-y-1.5">
              <h2 className="truncate text-sm font-semibold text-text">
                {movie.title}
              </h2>
              <p className="truncate text-xs text-text-sub">
                {movie.original_language}
              </p>
              <div className="flex items-center gap-2">
                <Image src="/imdb-logo.svg" width={30} height={30} alt="IMDb" />
                <p className="text-xs text-text-sub">{movie.rating}/10</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
