"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function NowShowingMovies() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="embla py-4" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide m-auto">
          <div className="flex h-52 items-center justify-center rounded-lg border-2">
            <h1>Slide 1</h1>
          </div>
        </div>
        <div className="embla__slide">
          <div className="flex h-52 items-center justify-center rounded-lg border-2">
            <h1>Slide 2</h1>
          </div>
        </div>
        <div className="embla__slide">
          <div className="flex h-52 items-center justify-center rounded-lg border-2">
            <h1>Slide 3</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
