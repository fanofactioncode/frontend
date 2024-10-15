import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { GetLocationIcon, MoreInfoIcon, PlayIcon } from "@/components/icons";

export default function BookingPage() {
  return (
    <>
      <main className="container py-2 md:py-8 md:pb-0">
        <div className="hidden md:flex md:items-center md:gap-4">
          <div className="w-1/2 space-y-3">
            <h1 className="text-4xl font-extrabold text-text">
              The Ministry of Ungentlemanly Warfare
            </h1>
            <p className="text-sm text-text">Action, Adventure, Comedy</p>
            <div className="flex items-center gap-2">
              <Badge>2 hr 15 min</Badge>
              <Badge className="flex items-center gap-2">
                7.8 <StarIcon size={14} />
              </Badge>
            </div>
          </div>
          <div className="w-1/2">
            <div className="relative h-[250px] w-full overflow-hidden rounded-[1.25rem]">
              <Image
                src="/video-thumbnail.jpg"
                alt="Fan of action intro video thumbnail"
                fill
                className="-z-10 h-full w-full object-cover"
              />
              <div className="z-40 h-full w-full bg-primary/60 dark:bg-secondary/65" />
              <PlayIcon
                color="white"
                className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>

        <div className="relative h-[120px] overflow-hidden rounded-2xl md:hidden">
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

          <Button
            variant="outline"
            className="flex !h-[75px] !w-[70px] flex-col items-center justify-center rounded-lg border border-secondary bg-background p-3"
          >
            <p className="text-center text-xs font-bold text-primary dark:text-white">
              Sunday
            </p>
            <p className="text-2xl font-bold text-primary dark:text-white">
              06
            </p>
          </Button>

          <Button
            variant="outline"
            className="flex !h-[75px] !w-[70px] flex-col items-center justify-center rounded-lg border border-secondary bg-background p-3"
          >
            <p className="text-center text-xs font-bold text-primary dark:text-white">
              Monday
            </p>
            <p className="text-2xl font-bold text-primary dark:text-white">
              07
            </p>
          </Button>

          <Button
            variant="outline"
            className="flex !h-[75px] !w-[70px] flex-col items-center justify-center rounded-lg border border-secondary bg-background p-3"
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
        <div className="h-3 bg-secondary/10 dark:bg-secondary/30 md:hidden"></div>
        <div className="container relative space-y-6 py-6 md:flex md:space-y-0">
          <div className="space-y-3 md:w-5/12 md:shrink-0">
            <h2 className="text-base font-bold text-text md:text-lg">
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

          <div className="flex flex-wrap items-center gap-4 md:w-7/12">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex !h-12 min-w-[100px] items-center justify-center rounded-xl border border-secondary py-2 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary md:!h-16 md:text-base"
                    asChild
                  >
                    <Link href="/booking-seat/movie-id">11:00 PM</Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="relative bottom-3 overflow-visible border-secondary before:absolute before:-bottom-4 before:left-1/2 before:-z-10 before:h-8 before:w-8 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-secondary before:bg-popover">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center p-2">
                      <p className="text-center text-sm font-semibold">₹ 200</p>
                      <p className="text-center text-sm font-semibold uppercase text-[#21C179]">
                        Available
                      </p>
                    </div>
                    <div className="flex flex-col items-center p-2">
                      <p className="text-center text-sm font-semibold">₹ 200</p>
                      <p className="text-center text-sm font-semibold uppercase text-[#21C179]">
                        Available
                      </p>
                    </div>
                    <div className="flex flex-col items-center p-2">
                      <p className="text-center text-sm font-semibold">₹ 200</p>
                      <p className="text-center text-sm font-semibold uppercase text-[#21C179]">
                        Available
                      </p>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button
              variant="outline"
              className="flex !h-12 min-w-[100px] items-center justify-center rounded-xl border border-secondary py-2 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary md:!h-16 md:text-base"
              asChild
            >
              <Link href="/booking-seat/movie-id">03:00 PM</Link>
            </Button>

            <Button
              variant="outline"
              className="flex !h-12 min-w-[100px] items-center justify-center rounded-xl border border-secondary py-2 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary md:!h-16 md:text-base"
              asChild
            >
              <Link href="/booking-seat/movie-id">06:00 PM</Link>
            </Button>
          </div>

          <div className="absolute bottom-0 left-1/2 hidden h-[1px] w-[calc(100%-6rem)] -translate-x-1/2 bg-input md:block"></div>
        </div>
        <div className="h-3 bg-secondary/10 dark:bg-secondary/30 md:hidden"></div>
        <div className="container relative space-y-6 py-6 md:flex md:space-y-0">
          <div className="space-y-3 md:w-5/12 md:shrink-0">
            <h2 className="text-base font-bold text-text md:text-lg">
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

          <div className="flex flex-wrap items-center gap-4 md:w-7/12">
            <Button
              variant="outline"
              className="flex !h-12 min-w-[100px] items-center justify-center rounded-xl border border-secondary py-2 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary md:!h-16 md:text-base"
              asChild
            >
              <Link href="/booking-seat/movie-id">11:00 PM</Link>
            </Button>

            <Button
              variant="outline"
              className="flex !h-12 min-w-[100px] items-center justify-center rounded-xl border border-secondary py-2 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary md:!h-16 md:text-base"
              asChild
            >
              <Link href="/booking-seat/movie-id">03:00 PM</Link>
            </Button>

            <Button
              variant="outline"
              className="flex !h-12 min-w-[100px] items-center justify-center rounded-xl border border-secondary py-2 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary md:!h-16 md:text-base"
              asChild
            >
              <Link href="/booking-seat/movie-id">06:00 PM</Link>
            </Button>
            <Button
              variant="outline"
              className="flex !h-12 min-w-[100px] items-center justify-center rounded-xl border border-secondary py-2 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary md:!h-16 md:text-base"
              asChild
            >
              <Link href="/booking-seat/movie-id">06:00 PM</Link>
            </Button>
            <Button
              variant="outline"
              className="flex !h-12 min-w-[100px] items-center justify-center rounded-xl border border-secondary py-2 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary md:!h-16 md:text-base"
              asChild
            >
              <Link href="/booking-seat/movie-id">06:00 PM</Link>
            </Button>
            <Button
              variant="outline"
              className="flex !h-12 min-w-[100px] items-center justify-center rounded-xl border border-secondary py-2 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary md:!h-16 md:text-base"
              asChild
            >
              <Link href="/booking-seat/movie-id">06:00 PM</Link>
            </Button>
          </div>

          <div className="absolute bottom-0 left-1/2 hidden h-[1px] w-[calc(100%-6rem)] -translate-x-1/2 bg-input md:block"></div>
        </div>
        <div className="h-3 bg-secondary/10 dark:bg-secondary/30 md:hidden"></div>
      </section>
    </>
  );
}
