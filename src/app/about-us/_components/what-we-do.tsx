import {
  RecommendationIcon,
  ReReleaseIcon,
  ReviewIcon,
} from "@/components/icons";
import { Badge } from "@/components/ui/badge";

export function WhatWeDo() {
  return (
    <section className="container py-16 sm:py-24">
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <Badge>What we do</Badge>
        <h2 className="text-center text-4xl font-bold text-text md:max-w-[840px] md:text-5xl">
          Do you want to know what we do?
        </h2>
      </div>

      <div className="mt-16 space-y-16 sm:flex-wrap sm:items-stretch sm:gap-4 md:flex md:gap-6 md:space-y-0 lg:gap-16">
        <div className="flex-1 space-y-4 rounded-2xl border border-secondary bg-[#F8F8F8] px-6 py-9 dark:border-secondary dark:bg-secondary/50 sm:space-y-5 sm:px-9 sm:py-14">
          <div className="flex size-16 items-center justify-center rounded-full bg-[#FFC300]/15">
            <ReReleaseIcon className="size-8 stroke-[#FFC300]" />
          </div>
          <h3 className="text-2xl font-semibold text-text">Re Release</h3>
          <p className="text-sm leading-normal text-text-sub sm:text-base">
            We are commited to bring good cinema back to big screens.
          </p>
        </div>

        <div className="flex-1 space-y-4 rounded-2xl border border-secondary bg-[#F8F8F8] px-6 py-9 dark:border-secondary dark:bg-secondary/50 sm:space-y-5 sm:px-9 sm:py-14">
          <div className="flex size-16 items-center justify-center rounded-full bg-[#6C00FF]/15">
            <RecommendationIcon className="size-8 stroke-[#6C00FF]" />
          </div>
          <h3 className="text-2xl font-semibold text-text">Recommendation</h3>
          <p className="text-sm leading-normal text-text-sub sm:text-base">
            Wondering what to watch? We&apos;ve got you covered with our
            handpicked movie recommendations. Stay connected for top-notch
            suggestions delivered right to you!
          </p>
        </div>

        <div className="flex-1 space-y-4 rounded-2xl border border-secondary bg-[#F8F8F8] px-6 py-9 dark:border-secondary dark:bg-secondary/50 sm:space-y-5 sm:px-9 sm:py-14">
          <div className="flex size-16 items-center justify-center rounded-full bg-[#00BDFF]/15">
            <ReviewIcon className="size-8 stroke-[#00BDFF]" />
          </div>
          <h3 className="text-2xl font-semibold text-text">Review</h3>
          <p className="text-sm leading-normal text-text-sub sm:text-base">
            Good or not so good, we will share our honest reviews so you can
            ultimately decide whether to watch it or not.
          </p>
        </div>
      </div>
    </section>
  );
}
