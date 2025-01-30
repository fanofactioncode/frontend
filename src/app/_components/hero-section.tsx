import VideoPlayer from "next-video/player";

import { VIDEO_PLAYER_ACCENT_COLOR } from "@/config/colors";
import { FOA_INTRO_VIDEO_URL } from "@/config/constants";

export function HeroSection() {
  return (
    <main className="container flex max-w-[970px] flex-col gap-8 py-16">
      <div className="space-y-4 md:space-y-8">
        <h1 className="text-balance text-center text-4xl font-extrabold text-text md:text-5xl md:leading-tight">
          <span className="rounded-xl bg-[#B9F18C] px-1.5 py-0.5 dark:bg-[#FF499E]">
            FanOfAction
          </span>{" "}
          : The Ultimate Destination for Cinema Rerelease
        </h1>
        <p className="text-center text-sm text-text-sub md:px-32 md:text-base">
          Experience the thrill of seeing your favorite movies on the big screen
          once again! FanOfAction is your go-to destination for classic and
          blockbuster movie rereleases in theaters. Don’t miss out on the
          cinematic magic!
        </p>
      </div>

      <div className="relative md:mt-20">
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

        <div className="relative box-border aspect-video overflow-hidden rounded-2xl border-4 border-secondary md:rounded-3xl md:border-8">
          <VideoPlayer
            src={FOA_INTRO_VIDEO_URL}
            accentColor={VIDEO_PLAYER_ACCENT_COLOR}
            poster="/assets/video-thumbnail.webp"
            controls={true}
          />
        </div>
      </div>
    </main>
  );
}
