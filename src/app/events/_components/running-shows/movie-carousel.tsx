"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/common/carousel-arrow-buttons";
import { cn } from "@/lib/utils";
import { RecentlyShow } from "@/types/show.type";

import { DotButton, useDotButton } from "./carousel-dot-button";
import MovieCarouselItem from "./movie-carousel-item";

export interface MovieCarouselProps {
  shows: RecentlyShow[];
}

export default function MovieCarousel({ shows }: MovieCarouselProps) {
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
        {shows.map(({ movie, id, slug }) => (
          <div key={id} className="container shrink-0 md:px-4">
            <MovieCarouselItem
              name={movie.title}
              language={movie.original_language}
              poster={movie.cover_poster_url ?? ""}
              movieLogo={movie.logo_url ?? ""}
              slug={slug}
            />
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
        {shows.map(({ id }, index) => (
          <DotButton
            key={`__dot-${id}`}
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
