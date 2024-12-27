import Video from "next-video";

import { VIDEO_PLAYER_ACCENT_COLOR } from "@/config/colors";
import { FOA_INTRO_VIDEO_URL } from "@/config/constants";

export function AboutUsMain() {
  return (
    <main className="container py-16 md:flex md:py-24">
      <div className="flex flex-col items-start gap-10 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center gap-2 md:w-1/2 md:items-start md:justify-start">
          <h1 className="text-balance text-center text-4xl font-bold text-text sm:text-5xl sm:leading-tight md:text-left md:text-6xl md:font-extrabold md:leading-tight">
            Who are{" "}
            <span className="rounded-xl bg-[#B9F18C] px-1.5 py-0.5 dark:bg-[#FF499E]">
              we
            </span>{" "}
            and what we do?
          </h1>
          <p className="text-center text-sm text-text-sub sm:text-base md:text-start">
            We are bringing the good old classis, cults back to cinemas in your
            city
          </p>
        </div>

        <div className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border-4 border-secondary bg-gray-400 dark:border-primary md:w-1/2 md:border-8">
          <Video
            src={FOA_INTRO_VIDEO_URL}
            accentColor={VIDEO_PLAYER_ACCENT_COLOR}
            poster="/video-thumbnail.png"
            controls={true}
          />
        </div>
      </div>
    </main>
  );
}
