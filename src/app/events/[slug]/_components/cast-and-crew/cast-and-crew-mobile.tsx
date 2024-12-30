"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import { Artist } from "@/types/show.type";

export interface CastAndCrewProps {
  artists: Artist[];
}

export function CastAndCrewMobile({ artists }: CastAndCrewProps) {
  const [emblaRef] = useEmblaCarousel({
    skipSnaps: true,
  });

  return (
    <section className="space-y-3 py-12 sm:hidden">
      <h2 className="px-4 text-lg font-bold text-text">Cast & Crew</h2>

      <div className="embla relative px-4" ref={emblaRef}>
        <div className="flex gap-4">
          {artists.map((cast) => (
            <div key={cast.id} className="w-[100px]">
              <div className="relative h-[100px] w-[100px] overflow-hidden rounded-xl">
                <Image
                  src={cast.people.profile_picture_url}
                  alt={cast.people.name}
                  fill
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-2 w-full text-balance text-sm font-semibold text-text">
                {cast.people.name}
              </p>
              <p className="w-full text-balance text-xs text-text-sub">
                {cast.character_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
