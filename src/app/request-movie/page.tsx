import React from "react";

import { Button } from "@/components/ui/button";
import { ArrowDownIcon, MapIcon, MovieIcon } from "@/components/icons";

export default function RequestMoviePage() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl text-text font-bold text-center leading-snug">
        What you want to{" "}
        <span className="bg-[#B9F18C] dark:bg-[#FF499E] rounded-xl px-1.5 py-0.5">
          watch
        </span>{" "}
        next ?
      </h1>
      <p className="text-sm text-text-sub text-center mt-2">
        Tell us what you want to see on your city, and we’ll release it for you.
        We know you want to celebrate the movie we also do the same.
      </p>

      <div className="border border-secondary dark:border-primary rounded-2xl p-6 mt-8">
        <div className="flex flex-col gap-2">
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

        <div className="h-[1px] w-full bg-secondary dark:bg-primary my-6"></div>

        <div className="flex flex-col gap-2">
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
      </div>

      <Button className="w-full mt-8">Submit</Button>
    </main>
  );
}
