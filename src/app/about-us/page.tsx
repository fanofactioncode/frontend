import React from "react";
import Image from "next/image";

import Badge from "@/components/ui/badge";
import {
  PlayIcon,
  RecommendationIcon,
  ReReleaseIcon,
  ReviewIcon,
} from "@/components/icons";
import PreviousEvents from "@/components/common/previous-events";

export default function AboutUsPage() {
  return (
    <>
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

      <section className="container py-16 sm:py-24">
        <div className="flex w-full flex-col items-center justify-center gap-3">
          <Badge>What we do</Badge>
          <h2 className="text-center text-4xl font-bold text-text md:max-w-[840px] md:text-5xl">
            Do you want to know what we do for you ?
          </h2>
        </div>

        <div className="mt-16 space-y-16 sm:flex-wrap sm:items-start sm:gap-4 md:flex md:gap-6 md:space-y-0 lg:gap-16">
          <div className="flex-1 space-y-4 rounded-2xl border border-secondary bg-[#F8F8F8] px-6 py-9 dark:border-secondary dark:bg-secondary/50 sm:space-y-5 sm:px-9 sm:py-14">
            <div className="flex size-16 items-center justify-center rounded-full bg-[#FFC300]/15">
              <ReReleaseIcon className="size-8 stroke-[#FFC300]" />
            </div>
            <h3 className="text-2xl font-semibold text-text">Re Release</h3>
            <p className="text-sm leading-normal text-text-sub sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Viverra euismod duis
              aliquam ipsum. Ac senectus turpis sed sagittis nulla feugiat
              vulputate. Massa vulputate donec ligula elit ut. Viverra eros ut
              morbi auctor odio enim.
            </p>
          </div>

          <div className="flex-1 space-y-4 rounded-2xl border border-secondary bg-[#F8F8F8] px-6 py-9 dark:border-secondary dark:bg-secondary/50 sm:space-y-5 sm:px-9 sm:py-14">
            <div className="flex size-16 items-center justify-center rounded-full bg-[#6C00FF]/15">
              <RecommendationIcon className="size-8 stroke-[#6C00FF]" />
            </div>
            <h3 className="text-2xl font-semibold text-text">Recommendation</h3>
            <p className="text-sm leading-normal text-text-sub sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Viverra euismod duis
              aliquam ipsum. Ac senectus turpis sed sagittis nulla feugiat
              vulputate. Massa vulputate donec ligula elit ut. Viverra eros ut
              morbi auctor odio enim.
            </p>
          </div>

          <div className="flex-1 space-y-4 rounded-2xl border border-secondary bg-[#F8F8F8] px-6 py-9 dark:border-secondary dark:bg-secondary/50 sm:space-y-5 sm:px-9 sm:py-14">
            <div className="flex size-16 items-center justify-center rounded-full bg-[#00BDFF]/15">
              <ReviewIcon className="size-8 stroke-[#00BDFF]" />
            </div>
            <h3 className="text-2xl font-semibold text-text">Review</h3>
            <p className="text-sm leading-normal text-text-sub sm:text-base">
              Lorem ipsum dolor sit amet consectetur. Viverra euismod duis
              aliquam ipsum. Ac senectus turpis sed sagittis nulla feugiat
              vulputate. Massa vulputate donec ligula elit ut. Viverra eros ut
              morbi auctor odio enim.
            </p>
          </div>
        </div>
      </section>

      <PreviousEvents />
    </>
  );
}
