"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { DotButton, useDotButton } from "./careusel-dot-button";

export default function NowShowingMovies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      playOnInit: true,
      delay: 3000,
      stopOnInteraction: false,
    }),
  ]);

  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className="embla relative py-4" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide m-auto">
          <div className="relative flex h-[190px] overflow-hidden rounded-2xl">
            <Image
              src="/assets/planet-of-the-apes.png"
              className="z-0 h-full w-full object-cover"
              alt="Planet of the Apes"
              fill
            />
            <div className="z-10 flex h-full w-7/12 flex-col items-start justify-center gap-3 bg-gradient-to-r from-primary from-35% via-primary/80 via-75% to-transparent to-100% py-8 pr-4 ps-6 dark:from-secondary dark:via-secondary/80">
              <div className="relative h-full w-full">
                <Image
                  src="/assets/planet-of-the-apes-logo.png"
                  alt="Planet of the Apes"
                  fill
                  className="h-full w-full object-contain pr-10"
                />
              </div>
              <p className="text-xs text-white">{"English | हिन्दी | தமிழ்"}</p>
              <Button
                size="sm"
                variant="secondary"
                className="rounded-xl p-5 text-sm dark:bg-primary dark:text-black"
              >
                Book Tickets
              </Button>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="relative flex h-[190px] overflow-hidden rounded-2xl">
            <Image
              src="/assets/furiosa.png"
              className="z-0 h-full w-full object-cover"
              alt="Furiosa: A Mad Max Saga"
              fill
            />
            <div className="z-10 flex h-full w-7/12 flex-col items-start justify-center gap-3 bg-gradient-to-r from-primary from-35% via-primary/80 via-75% to-transparent to-100% py-8 pr-4 ps-6 dark:from-secondary dark:via-secondary/80">
              <div className="relative h-full w-full">
                <Image
                  src="/assets/furiosa-logo.png"
                  alt="Furiosa: A Mad Max Saga"
                  fill
                  className="h-full w-full object-contain pr-10"
                />
              </div>
              <p className="text-xs text-white">{"English | हिन्दी"}</p>
              <Button
                size="sm"
                variant="secondary"
                className="rounded-xl p-5 text-sm dark:bg-primary dark:text-black"
              >
                Book Tickets
              </Button>
            </div>
          </div>
        </div>
        <div className="embla__slide">
          <div className="relative flex h-[190px] overflow-hidden rounded-2xl">
            <Image
              src="/assets/bad-boys.png"
              className="z-0 h-full w-full object-cover"
              alt="Bad Boys: Ride Or Die"
              fill
            />
            <div className="z-10 flex h-full w-7/12 flex-col items-start justify-center gap-3 bg-gradient-to-r from-primary from-35% via-primary/80 via-75% to-transparent to-100% py-8 pr-4 ps-6 dark:from-secondary dark:via-secondary/80">
              <div className="relative h-full w-full">
                <Image
                  src="/assets/bad-boys-logo.png"
                  alt="Bad Boys: Ride Or Die"
                  fill
                  className="h-full w-full object-contain pr-10"
                />
              </div>
              <p className="text-xs text-white">{"English | हिन्दी | தமிழ்"}</p>
              <Button
                size="sm"
                variant="secondary"
                className="rounded-xl p-5 text-sm dark:bg-primary dark:text-black"
              >
                Book Tickets
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "size-2 rounded-full bg-secondary",
              selectedIndex === index && "bg-primary"
            )}
          />
        ))}
      </div>
    </div>
  );
}
