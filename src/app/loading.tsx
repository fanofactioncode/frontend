"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function Loading() {
  return (
    <div className="main flex w-full items-center justify-center">
      <Player
        src="/assets/lottie/animation_foa.json"
        loop
        autoplay
        className="absolute left-2/4 top-2/4 h-20 w-20 -translate-x-2/4 -translate-y-2/4"
      />
    </div>
  );
}
