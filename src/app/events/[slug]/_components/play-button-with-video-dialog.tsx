"use client";

import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";
import ReactPlayer from "react-player";

import { PlayIcon } from "@/components/icons";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function PlayButtonWithVideoDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <>
      <button
        aria-label="play video button"
        onClick={() => setIsDialogOpen(true)}
        className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <PlayIcon
          color="white"
          className="size-10 transition-all duration-300 group-focus-within:scale-125 peer-focus-within:scale-125 sm:size-20 sm:group-focus-within:scale-105"
        />
      </button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="top-1/4 aspect-video w-[95%] overflow-hidden rounded-lg !border-none bg-transparent !p-0 sm:aspect-[16/9] md:top-1/2">
          <DialogTitle className="hidden" />
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
