"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type Cast = {
  name: string;
  image: string;
  role: string;
  character: string;
};

const casts: Cast[] = [
  {
    name: "Henry Cavil",
    image: "/assets/actor-1.png",
    role: "Actor",
    character: "Gus March-Phillips",
  },
  {
    name: "Alan Ritchson",
    image: "/assets/actor-2.png",
    role: "Actor",
    character: "Anders Lassen",
  },
  {
    name: "Hero Fiennes Tiffin",
    image: "/assets/actor-3.png",
    role: "Actor",
    character: "Henry Hayes",
  },
  {
    name: "Alex Pettyfer",
    image: "/assets/actor-4.png",
    role: "Actor",
    character: "Gus March-Phillips",
  },
];

export default function CastAndCrew() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="space-y-3 py-12">
      <h2 className="px-4 text-lg font-bold text-text">Cast & Crew</h2>

      <div className="embla relative px-4" ref={emblaRef}>
        <div className="flex gap-4">
          {casts.map((cast) => (
            <div key={cast.name} className="w-[100px]">
              <div className="relative h-[100px] w-full overflow-hidden rounded-xl">
                <Image
                  src={cast.image}
                  alt={cast.name}
                  fill
                  sizes="100vw"
                  className="w-full"
                />
              </div>
              <p className="mt-2 truncate text-sm font-semibold text-text">
                {cast.name}
              </p>
              <p className="truncate text-xs text-text-sub underline">
                {cast.character}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
