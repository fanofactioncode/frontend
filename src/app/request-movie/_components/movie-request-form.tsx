"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, MapIcon, MovieIcon } from "@/components/icons";

export default function MovieRequestForm() {
  return (
    <>
      <div className="border mx-auto max-w-[750px] flex flex-col  border-secondary dark:border-primary rounded-2xl p-6 mt-8 sm:mt-12 sm:flex-row sm:items-center sm:gap-5">
        <div className="flex flex-col gap-2 sm:flex-1">
          <div className="flex flex-row items-center gap-2">
            <MovieIcon size={18} color="#B9F18C" />
            <p className="text-base text-text font-semibold">Movie</p>
            <ArrowDownIcon
              size={18}
              color="black"
              className="fill-primary stroke-primary"
            />
          </div>
          <p className="text-text-sub">Which movie do you want to see ?</p>
        </div>

        <div className="h-[1px] w-full sm:h-[60px] sm:w-[1px] bg-secondary dark:bg-primary my-6 sm:my-0"></div>

        <div className="flex flex-col gap-2 sm:flex-1">
          <div className="flex flex-row items-center gap-2">
            <MapIcon size={18} color="#B9F18C" />
            <p className="text-base text-text font-semibold">Location</p>
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

      <Button className="w-full mt-8 sm:hidden">Submit</Button>
    </>
  );
}
