import React from "react";

import { GetLocationIcon, MoreInfoIcon } from "@/components/icons";

import { ShowTimeButton } from "./show-time-button";

export function BookingTimes() {
  return (
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
  );
}
