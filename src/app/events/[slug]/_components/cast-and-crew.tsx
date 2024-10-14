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
  const [emblaRef] = useEmblaCarousel({
    skipSnaps: true,
  });

  return (
    <section className="space-y-3 py-12 sm:hidden">
      <h2 className="px-4 text-lg font-bold text-text">Cast & Crew</h2>

      <div className="embla relative px-4" ref={emblaRef}>
        <div className="flex gap-4">
          {casts.map((cast, index) => (
            <div key={cast.name + index} className="w-[100px]">
              <div className="relative h-[100px] w-[100px] overflow-hidden rounded-xl">
                <Image
                  src={cast.image}
                  alt={cast.name}
                  fill
                  className="w-full"
                />
              </div>
              <p className="mt-2 w-full text-balance text-sm font-semibold text-text">
                {cast.name}
              </p>
              <p className="w-full text-balance text-xs text-text-sub">
                {cast.character}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
