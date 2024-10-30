import React from "react";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "@/components/icons";

import { FeatureMovies } from "./_components/feature-movies";
import { CastAndCrew } from "./_components/cast-and-crew";

export default function EventDetailsPage() {
  return (
    <>
      <main className="relative">
        <div className="container hidden py-5 sm:block">
          <div className="relative h-[600px] overflow-hidden rounded-3xl">
            <Image
              src="/assets/planet-of-the-apes.png"
              alt="Platnet of the Apes"
              className="-z-10 h-full w-full object-cover"
              fill
            />
            <div className="z-50 flex h-full items-start gap-[1.875rem] bg-gradient-to-r from-primary from-35% via-primary/80 via-75% to-transparent to-100% p-[3.75rem] dark:from-secondary dark:via-secondary/80 sm:w-full md:w-9/12">
              <div className="relative w-52 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src="/assets/planet-of-the-apes-potrate.png"
                  alt="Planet of the Apes"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
                <PlayIcon
                  color="white"
                  className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
              <div className="mt-4 space-y-5">
                <h1 className="text-3xl font-bold text-white">
                  The Ministry of Ungentlemanly Warfare
                </h1>
                <p className="text-sm text-white">
                  British Prime Minister Winston Churchill and a group of
                  military officials hatch a daring plan to neutralize
                  Hitler&lsquo;s fleet of German U-boats during World War II.
                  Made up of a motley crew of rogues and mavericks, the
                  top-secret combat unit uses unconventional techniques to
                  battle the Nazis and change the course of the war.
                </p>
                <p className="text-sm text-white">Action, Adventure, Comedy</p>
                <div className="flex items-center gap-3">
                  <Badge className="border-none bg-[#ABB7C4] dark:bg-[#ABB7C4] dark:text-black">
                    2 hr 15 min
                  </Badge>
                  <Badge className="flex items-center gap-2 border-none bg-[#ABB7C4] dark:bg-[#ABB7C4] dark:text-black">
                    7.5
                    <StarIcon size={14} />
                  </Badge>
                </div>

                <div></div>
                <Link href={`/booking/the-ministry-of-ungentlemanly-warfare`}>
                  <Button className="mt-11 bg-white text-primary hover:bg-white/65 dark:text-secondary">
                    Book Tickets
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container sm:hidden">
          <div className="group relative my-3 h-[166px] overflow-hidden rounded-xl">
            <Image
              src="/assets/planet-of-the-apes.png"
              alt="Platnet of the Apes"
              fill
              objectFit="cover"
            />

            <div className="absolute z-10 h-full w-full bg-[radial-gradient(rgba(16,33,50,0)_0%,rgba(16,33,50,0.5)_100%)]"></div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <PlayIcon
                color="white"
                className="size-10 transition-all duration-300 group-hover:scale-125"
              />
            </div>
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
                  <Image
                    src="/imdb-logo.svg"
                    width={26}
                    height={26}
                    alt="IMDb"
                  />
                  7.8
                </Badge>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-text">
            British Prime Minister Winston Churchill and a group of military
            officials hatch a daring plan to neutralize Hitler&apos;s fleet of
            German U-boats during World War II. Made up of a motley crew of
            rogues and mavericks, the top-secret combat unit uses unconventional
            techniques to battle the Nazis and change the course of the war.
          </p>
        </div>
        <CastAndCrew />

        <div className="sticky bottom-0 border-b border-t bg-background p-4 sm:hidden">
          <Button asChild className="w-full">
            <Link href={"/booking/movie-id-here"}>Waitlist / Buy Tickets</Link>
          </Button>
        </div>
      </main>
      <FeatureMovies />
    </>
  );
}
