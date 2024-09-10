import Image from "next/image";

import PageLayout from "@/components/layout/page-layout";
import { PlayIcon } from "@/components/icons";

import UpcomingShows from "./upcoming-shows";
import SuggestMovie from "./suggest-movie";

export default function Home() {
  return (
    <PageLayout>
      <main className="container flex max-w-[970px] flex-col gap-8 py-16">
        <div className="space-y-4">
          <h1 className="text-balance text-center text-4xl font-extrabold leading-tight text-text md:text-5xl md:leading-tight">
            Epic{" "}
            <span className="rounded-xl bg-[#B9F18C] px-1.5 py-0.5 dark:bg-[#FF499E]">
              Cinematic
            </span>{" "}
            Revival: The Return of a Blockbuster - Movie Rerelease Spectacular!
          </h1>
          <p className="text-center text-sm text-text-sub md:px-32 md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quam aliquam id nam? Incidunt quidem voluptatibus facilis soluta
            itaque eveniet!
          </p>
        </div>

        <div className="relative">
          <svg
            id="polygon"
            width="53"
            height="49"
            viewBox="0 0 53 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-6 -left-3"
          >
            <path
              d="M52.4724 0.959063L32.1694 48.7899L0.898212 7.29158L52.4724 0.959063Z"
              fill="#E9EB87"
            />
          </svg>

          <svg
            id="thunder"
            width="66"
            height="37"
            viewBox="0 0 66 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -right-2 -top-4"
          >
            <path
              d="M4.16489 34.777L10.3715 19.3261L27.2649 26.6138L29.2286 12.6623L45.1793 20.2831L48.5572 5.83185L63.565 13.7859"
              stroke="#FF499E"
              strokeWidth="7"
            />
          </svg>

          <div className="relative h-[200px] overflow-hidden rounded-2xl border-4 border-secondary md:h-[450px] md:rounded-3xl md:border-[10px]">
            <Image
              src="/video-thumbnail.jpg"
              alt="Fan of action intro video thumbnail"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
            />

            <PlayIcon
              color="white"
              className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 md:size-24"
            />
          </div>
        </div>
      </main>

      <UpcomingShows />
      <SuggestMovie />
    </PageLayout>
  );
}
