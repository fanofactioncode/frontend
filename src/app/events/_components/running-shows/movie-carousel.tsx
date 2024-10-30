"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { cn } from "@/lib/utils";
import {
  usePrevNextButtons,
  NextButton,
  PrevButton,
} from "@/components/common/carousel-arrow-buttons";

import { DotButton, useDotButton } from "./carousel-dot-button";
import MovieCarouselItem, {
  type MovieCarouselItemProps,
} from "./movie-carousel-item";

const movies: MovieCarouselItemProps[] = [
  {
    name: "Planet of the Apes",
    poster: "/assets/planet-of-the-apes.png",
    movieLogo: "/assets/planet-of-the-apes-logo.png",
    language: "English | हिन्दी",
  },
  {
    name: "Furiosa",
    poster: "/assets/furiosa.png",
    movieLogo: "/assets/furiosa-logo.png",
    language: "हिन्दी",
  },
  {
    name: "Bad Boys",
    poster: "/assets/bad-boys.png",
    movieLogo: "/assets/bad-boys-logo.png",
    language: "English",
  },
];

export default function MovieCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      playOnInit: true,
      delay: 4000,
      stopOnInteraction: false,
    }),
  ]);

  const { onNextButtonClick, onPrevButtonClick } = usePrevNextButtons(emblaApi);
  const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div className="embla relative py-4 md:pb-6 md:pt-4" ref={emblaRef}>
      <div className="embla__container">
        {movies.map((movie) => (
          <div className="container shrink-0 md:px-4" key={movie.poster}>
            <MovieCarouselItem {...movie} />
          </div>
        ))}
      </div>

      <PrevButton
        onClick={onPrevButtonClick}
        className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2"
      />

      <NextButton
        onClick={onNextButtonClick}
        className="absolute right-6 top-1/2 z-10 size-5 -translate-y-1/2 md:right-12"
      />

      <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
        {movies.map((movie, index) => (
          <DotButton
            key={`${movie.name}_${index}`}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              "size-1 rounded-full bg-secondary md:size-2.5",
              selectedIndex === index && "bg-primary"
            )}
          />
        ))}
      </div>
    </div>
  );
}
