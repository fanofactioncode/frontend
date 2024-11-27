"use client";

import { useState } from "react";
import ReactPlayer from "react-player";

import { PlayIcon } from "@/components/icons";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function PlayButtonWithVideoDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <>
      <button
        aria-label="Play video"
        onClick={() => {
          console.log("clicked");
          setIsDialogOpen(true);
        }}
      >
        <PlayIcon
          color="white"
          className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 sm:size-20"
        />
      </button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="top-1/4 aspect-video w-[95%] overflow-hidden rounded-lg !border-none bg-transparent !p-0 sm:aspect-[16/9] md:top-1/2">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=1kVK0MZlbI4&ab_channel=T-Series"
            height="100%"
            width="100%"
            controls={true}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
