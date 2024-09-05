import React from "react";
import Image from "next/image";

import Badge from "@/components/ui/badge";

import CastAndCrew from "./_components/cast-and-crew";
import FeatureMovies from "./_components/feature-movies";

export default function EventDetailsPage() {
  return (
    <>
      <main className="container">
        <div className="relative my-3 h-[166px] overflow-hidden rounded-xl">
          <Image
            src="/assets/planet-of-the-apes.png"
            alt="Platnet of the Apes"
            fill
            objectFit="cover"
          />
        </div>

        <div className="flex gap-3">
          <div className="relative w-28 overflow-hidden rounded-lg">
            <Image
              src="/assets/planet-of-the-apes-potrate.png"
              alt="Platnet of the Apes"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>

          <div className="mt-3 flex-1 space-y-2">
            <h1 className="text-lg font-bold text-text">
              Kingdom Of The Planet Of The Apes
            </h1>
            <p className="text-[0.75rem] font-medium text-primary">
              Action, Adventure, Comedy
            </p>

            <div className="flex gap-2">
              <Badge className="border-[0.5px]">2 hr 15 min</Badge>
              <Badge className="flex items-center gap-2 border-[0.5px]">
                <Image src="/imdb-logo.svg" width={26} height={26} alt="IMDb" />
                7.8
              </Badge>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-text">
          British Prime Minister Winston Churchill and a group of military
          officials hatch a daring plan to neutralize Hitler&apos;s fleet of
          German U-boats during World War II. Made up of a motley crew of rogues
          and mavericks, the top-secret combat unit uses unconventional
          techniques to battle the Nazis and change the course of the war.
        </p>
      </main>
      <CastAndCrew />
      <FeatureMovies />
    </>
  );
}
