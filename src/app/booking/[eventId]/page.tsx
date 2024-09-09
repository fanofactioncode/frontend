import React from "react";
import Image from "next/image";

import { GetLocationIcon, MoreInfoIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function BookingPage() {
  return (
    <>
      <main className="container py-2">
        <div className="relative h-[120px] overflow-hidden rounded-2xl">
          <Image
            src="/assets/bad-boys.png"
            alt="Bad boys"
            fill
            sizes="100vw"
            className="z-0 h-auto w-full"
            objectFit="cover"
          />

          <div className="absolute bottom-0 z-10 flex h-full w-full flex-col justify-end bg-gradient-to-t from-[#102132] to-transparent p-3">
            <h1 className="text-sm font-bold text-white">
              The Ministry of Ungentlemanly Warfare
            </h1>
            <div className="flex items-center gap-2">
              <p className="text-xs font-medium text-white">A</p>
              <span className="size-1.5 rounded-full bg-white"></span>
              <p className="text-xs font-medium text-white">2 hrs 8 mins</p>
              <span className="size-1.5 rounded-full bg-white"></span>
              <p className="text-xs font-medium text-white">
                Action, Adventure, Comedy
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 py-5">
          <div className="flex h-[75px] w-[65px] items-center justify-center rounded-lg bg-secondary p-3">
            <p className="text-base font-bold text-primary">Jul</p>
          </div>

          <div className="flex h-[75px] w-[70px] flex-col items-center justify-center rounded-lg border border-secondary bg-background p-3">
            <p className="text-center text-xs font-bold text-primary dark:text-white">
              Sunday
            </p>
            <p className="text-2xl font-bold text-primary dark:text-white">
              06
            </p>
          </div>

          <div className="flex h-[75px] w-[70px] flex-col items-center justify-center rounded-lg border border-secondary bg-background p-3">
            <p className="text-center text-xs font-bold text-primary dark:text-white">
              Monday
            </p>
            <p className="text-2xl font-bold text-primary dark:text-white">
              07
            </p>
          </div>

          <Button
            variant="outline"
            className="flex h-[75px] w-[70px] flex-col items-center justify-center rounded-lg border border-secondary bg-background p-3"
          >
            <p className="text-center text-xs font-bold text-primary dark:text-white">
              Tuesday
            </p>
            <p className="text-2xl font-bold text-primary dark:text-white">
              08
            </p>
          </Button>
        </div>
      </main>

      <section>
        <div className="h-3 bg-secondary/10 dark:bg-secondary/30"></div>
        <div className="container space-y-6 py-6">
          <div className="space-y-3">
            <h2 className="text-base font-bold text-text">
              Cinepolis Vandana, Rajkot
            </h2>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-lg border-[0.5px] border-text px-2 py-1">
                <GetLocationIcon className="size-3 stroke-text" />
                <p className="text-xs text-text">Get Location</p>
              </div>

              <div className="flex items-center gap-1.5 rounded-lg border-[0.5px] border-text px-2 py-1">
                <MoreInfoIcon className="size-3 stroke-text" />
                <p className="text-xs text-text">More Information</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="outline"
              className="flex h-auto min-w-[100px] items-center justify-center rounded-xl border border-secondary py-3 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary"
            >
              11:00 PM
            </Button>

            <Button
              variant="outline"
              className="flex h-auto min-w-[100px] items-center justify-center rounded-xl border border-secondary py-3 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary"
            >
              03:00 PM
            </Button>

            <Button
              variant="outline"
              className="flex h-auto min-w-[100px] items-center justify-center rounded-xl border border-secondary py-3 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary"
            >
              06:00 PM
            </Button>
          </div>
        </div>
        <div className="h-3 bg-secondary/10 dark:bg-secondary/30"></div>
        <div className="container space-y-6 py-6">
          <div className="space-y-3">
            <h2 className="text-base font-bold text-text">
              Cinepolis Vandana, Rajkot
            </h2>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-lg border-[0.5px] border-text px-2 py-1">
                <GetLocationIcon className="size-3 stroke-text" />
                <p className="text-xs text-text">Get Location</p>
              </div>

              <div className="flex items-center gap-1.5 rounded-lg border-[0.5px] border-text px-2 py-1">
                <MoreInfoIcon className="size-3 stroke-text" />
                <p className="text-xs text-text">More Information</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex w-[120px] items-center justify-center rounded-xl border border-secondary dark:border-primary">
              <p className="py-3 text-sm font-semibold text-[#21C179]">
                11:00 PM
              </p>
            </div>

            <div className="flex w-[120px] items-center justify-center rounded-xl border border-secondary dark:border-primary">
              <p className="py-3 text-sm font-semibold text-[#21C179]">
                03:00 PM
              </p>
            </div>

            <div className="flex w-[120px] items-center justify-center rounded-xl border border-secondary dark:border-primary">
              <p className="py-3 text-sm font-semibold text-[#21C179]">
                06:00 PM
              </p>
            </div>
          </div>
        </div>
        <div className="h-3 bg-secondary/10 dark:bg-secondary/30"></div>
      </section>
    </>
  );
}
