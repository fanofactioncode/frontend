"use client";

import { useState } from "react";
import { addDays, formatDate } from "date-fns";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import {
  NextButton,
  usePrevNextButtons,
} from "@/components/common/carousel-arrow-buttons";

import { DateButton } from "./date-button";

export default function ShowDates() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    skipSnaps: true,
    dragFree: true,
    watchDrag: true,
    breakpoints: {
      "(min-width: 768px)": {
        active: true,
        watchDrag: false,
        skipSnaps: false,
      },
    },
  });
  const { onNextButtonClick, onPrevButtonClick } = usePrevNextButtons(emblaApi);
  const [selectedDate, setSelectedDate] = useState<Date>();

  return (
    <div className="container relative">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="relative flex items-center gap-2 py-5 md:py-10">
          <div className="flex h-[75px] w-[65px] items-center justify-center rounded-lg bg-secondary p-3">
            <p className="text-base font-bold text-primary">Jul</p>
          </div>

          {Array.from({ length: 30 }).map((_, i) => {
            const day = addDays(new Date(), i);

            return (
              <DateButton
                key={i}
                isActive={
                  selectedDate !== undefined &&
                  formatDate(selectedDate, "dd-mm-yyyy") ===
                    formatDate(day, "dd-mm-yyyy")
                }
                date={day}
                onClick={() => {
                  setSelectedDate(day);
                }}
              />
            );
          })}
        </div>
      </div>
      <NextButton
        className="absolute -right-1 top-1/2 z-50 hidden -translate-y-1/2 bg-primary focus-within:bg-primary/80 md:block"
        onClick={onNextButtonClick}
      >
        <ArrowRightIcon className="size-6 stroke-secondary" />
      </NextButton>
      <NextButton
        className="absolute -left-1 top-1/2 z-50 hidden -translate-y-1/2 bg-primary focus-within:bg-primary/80 md:block"
        onClick={onPrevButtonClick}
      >
        <ArrowLeftIcon className="size-6 stroke-secondary" />
      </NextButton>
    </div>
  );
}
