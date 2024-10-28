import Image from "next/image";
import React from "react";

import { PlayIcon } from "@/components/icons";

export function AboutUsMain() {
  return (
    <main className="container py-16 md:flex md:py-24">
      <div className="flex flex-col items-start gap-10 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-2 md:w-1/2 md:items-start md:justify-start">
          <h1 className="text-balance text-center text-4xl font-bold text-text sm:text-5xl sm:leading-tight md:text-left md:text-6xl md:font-extrabold md:leading-tight">
            Are you{" "}
            <span className="rounded-xl bg-[#B9F18C] px-1.5 py-0.5 dark:bg-[#FF499E]">
              excited
            </span>{" "}
            about us, want to know more ?
          </h1>
          <p className="text-center text-sm text-text-sub sm:text-base md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            sapiente alias perspiciatis, ipsam blanditiis quidem soluta non.
            Obcaecati ipsam qui officia nemo rem, quasi facere, vero, eius
            deserunt nulla nam?
          </p>
        </div>

        <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border-4 border-secondary bg-gray-400 dark:border-primary md:w-1/2 md:border-8">
          <Image
            src="/video-thumbnail.jpg"
            alt="Fan of action intro video thumbnail"
            width={0}
            height={0}
            sizes="100vw"
            objectFit="cover"
            className="h-auto w-full"
          />

          <PlayIcon
            color="white"
            className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 md:size-24"
          />
        </div>
      </div>
    </main>
  );
}
