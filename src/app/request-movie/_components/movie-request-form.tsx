"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { ArrowDownIcon, MapIcon, MovieIcon } from "@/components/icons";

export default function MovieRequestForm() {
  return (
    <>
      <div className="mx-auto mt-8 flex max-w-[750px] flex-col rounded-2xl border border-secondary p-6 dark:border-primary sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
        <div className="flex flex-col gap-2 sm:flex-1">
          <div className="flex flex-row items-center gap-2">
            <MovieIcon size={18} color="#B9F18C" />
            <p className="text-base font-semibold text-text">Movie</p>
            <ArrowDownIcon
              size={18}
              color="black"
              className="fill-primary stroke-primary"
            />
          </div>
          <p className="text-text-sub">Which movie do you want to see ?</p>
        </div>

        <div className="my-6 h-[1px] w-full bg-secondary dark:bg-primary sm:my-0 sm:h-[60px] sm:w-[1px]"></div>

        <div className="flex flex-col gap-2 sm:flex-1">
          <div className="flex flex-row items-center gap-2">
            <MapIcon size={18} color="#B9F18C" />
            <p className="text-base font-semibold text-text">Location</p>
            <ArrowDownIcon
              size={18}
              color="black"
              className="fill-primary stroke-primary"
            />
          </div>
          <p className="text-text-sub">Which city you want to see ?</p>
        </div>

        <Button className="hidden sm:block">Submit</Button>
      </div>

      <Button className="mt-8 w-full sm:hidden">Submit</Button>
    </>
  );
}
