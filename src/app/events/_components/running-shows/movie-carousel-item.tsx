import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export interface MovieCarouselItemProps {
  poster: string;
  movieLogo: string;
  language: string;
}

export default function MovieCarouselItem({
  poster,
  movieLogo,
  language,
}: MovieCarouselItemProps) {
  return (
    <div className="relative flex h-[200px] overflow-hidden rounded-2xl">
      <Image
        src={poster}
        className="z-0 h-full w-full object-cover"
        alt="Planet of the Apes"
        fill
      />
      <div className="z-10 mt-0 flex h-full w-7/12 flex-col items-start justify-center gap-3 bg-gradient-to-r from-primary from-35% via-primary/80 via-75% to-transparent to-100% py-8 pr-4 ps-6 dark:from-secondary dark:via-secondary/80">
        <div className="relative h-full w-full">
          <Image
            src={movieLogo}
            alt="Planet of the Apes"
            fill
            className="h-full w-full object-contain pr-10"
          />
        </div>
        <p className="text-xs text-white">{language}</p>
        <Button
          size="sm"
          variant="secondary"
          className="rounded-xl p-5 text-sm dark:bg-primary dark:text-black"
        >
          Book Tickets
        </Button>
      </div>
    </div>
  );
}
