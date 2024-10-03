"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { Button } from "../ui/button";
import { TicketIcon } from "../icons";

export default function PreviousEvents() {
  const [emblaRef] = useEmblaCarousel({ skipSnaps: true });

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container md:ps-12">
        <div className="embla__slide !md:w-[650px] md:flex-auto">
          <div className="w-full rounded-2xl border border-secondary bg-[#F8F8F8] p-3 dark:bg-secondary/50">
            <Image
              src="/assets/penguin-bg.png"
              alt="previous event"
              width={0}
              height={0}
              sizes="100vw"
              objectFit="cover"
              className="h-auto w-full rounded-2xl"
            />
            <div className="md:flex md:items-center">
              <div className="mt-3 flex flex-1 gap-4">
                <div className="relative w-20">
                  <Image
                    src="/assets/penguin.png"
                    alt="previous event"
                    width={0}
                    height={0}
                    sizes="100vw"
                    objectFit="cover"
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-2 flex-1 space-y-1">
                  <span className="rounded-md bg-[#ABB7C4]/50 px-[8px] py-[5px] text-xs font-semibold text-text">
                    02 Jun, 2024
                  </span>
                  <h3 className="text-base font-semibold text-text">
                    The Penguin
                  </h3>
                  <p className="text-sm text-text-sub">
                    Cinepolis Vandana, Rajkot, 360001
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <Button className="flex w-full items-center gap-3" size="lg">
                  <TicketIcon className="size-6 fill-button-foreground" />
                  Book In My City
                </Button>
                <p className="mt-1 text-center text-[10px] text-text-sub underline">
                  Rerelese this movie in your city to enjoy
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="embla__slide !md:w-[650px] md:flex-auto">
          <div className="w-full rounded-2xl border border-secondary bg-[#F8F8F8] p-3 dark:bg-secondary/50">
            <Image
              src="/assets/penguin-bg.png"
              alt="previous event"
              width={0}
              height={0}
              sizes="100vw"
              objectFit="cover"
              className="h-auto w-full rounded-2xl"
            />
            <div className="md:flex md:items-center">
              <div className="mt-3 flex flex-1 gap-4">
                <div className="relative w-20">
                  <Image
                    src="/assets/penguin.png"
                    alt="previous event"
                    width={0}
                    height={0}
                    sizes="100vw"
                    objectFit="cover"
                    className="h-auto w-full rounded-xl"
                  />
                </div>
                <div className="mt-2 flex-1 space-y-1">
                  <span className="rounded-md bg-[#ABB7C4]/50 px-[8px] py-[5px] text-xs font-semibold text-text">
                    02 Jun, 2024
                  </span>
                  <h3 className="text-base font-semibold text-text">
                    The Penguin
                  </h3>
                  <p className="text-sm text-text-sub">
                    Cinepolis Vandana, Rajkot, 360001
                  </p>
                </div>
              </div>
              <div className="mt-3 space-y-2">
                <Button className="flex w-full items-center gap-3" size="lg">
                  <TicketIcon className="size-6 fill-button-foreground" />
                  Book In My City
                </Button>
                <p className="mt-1 text-center text-[10px] text-text-sub underline">
                  Rerelese this movie in your city to enjoy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
