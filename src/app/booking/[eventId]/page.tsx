import React from "react";
import Image from "next/image";
import { StarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { GetLocationIcon, MoreInfoIcon, PlayIcon } from "@/components/icons";

import ShowDates from "./_components/show-dates";
import { ShowTimeButton } from "./_components/show-time-button";

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
      </main>
      <ShowDates />

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
            <ShowTimeButton movieId="movie-id" showTime="10:00 AM" />
            <ShowTimeButton movieId="movie-id" showTime="02:00 PM" />
            <ShowTimeButton movieId="movie-id" showTime="06:00 PM" />
          </div>

          <div className="absolute bottom-0 left-1/2 hidden h-[1px] w-[calc(100%-2rem)] -translate-x-1/2 bg-input md:block"></div>
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
            <ShowTimeButton movieId="movie-id" showTime="10:00 AM" />
            <ShowTimeButton movieId="movie-id" showTime="02:00 PM" />
            <ShowTimeButton movieId="movie-id" showTime="06:00 PM" />
            <ShowTimeButton movieId="movie-id" showTime="08:00 PM" />
            <ShowTimeButton movieId="movie-id" showTime="09:00 PM" />
            <ShowTimeButton movieId="movie-id" showTime="10:00 PM" />
            <ShowTimeButton movieId="movie-id" showTime="12:00 PM" />
          </div>

          <div className="absolute bottom-0 left-1/2 hidden h-[1px] w-[calc(100%-2rem)] -translate-x-1/2 bg-input md:block"></div>
        </div>
        <div className="h-3 bg-secondary/10 dark:bg-secondary/30 md:hidden"></div>
      </section>
    </>
  );
}
