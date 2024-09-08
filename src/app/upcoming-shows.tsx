"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { LucideArrowRight } from "lucide-react";

import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const movies = [
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

export default function UpcomingShows() {
  const [emblaRef] = useEmblaCarousel({ skipSnaps: true });

  return (
    <section className="py-5">
      <div className="container space-y-2">
        <Badge className="rounded-xl">Next to watch</Badge>
        <div className="flex items-center justify-between">
          <h2 className="flex-1 truncate text-2xl font-bold text-text">
            Upcoming Shows
          </h2>

          <Button
            className="flex h-auto items-center gap-1 rounded-none bg-transparent p-0 px-1 py-1.5 text-xs text-[#FF499E] focus-within:border-none focus-within:outline-none hover:bg-transparent focus:border-none focus:outline-none"
            asChild
          >
            <Link href="/events" className="flex items-center gap-1">
              View All
              <LucideArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="embla relative px-4 pb-11 pt-4" ref={emblaRef}>
        <div className="flex gap-4">
          {movies.map(({ name, languages, poster, rating }, index) => (
            <div key={name + index} className="w-[140px] shrink-0 space-y-2">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={poster}
                  alt={name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-[140px] object-cover"
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
