import React from "react";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export interface ShowTimeButtonProps {
  movieId: string;
  showTime: string;
}

export function ShowTimeButton({ movieId, showTime }: ShowTimeButtonProps) {
  return (
    <>
      {/* Mobile */}
      <Button
        variant="outline"
        className="flex !h-12 min-w-[100px] items-center justify-center rounded-xl border border-secondary py-2 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary md:hidden md:!h-16 md:text-base"
        asChild
      >
        <Link href={`/booking-seat/${movieId}`}>{showTime}</Link>
      </Button>

      {/* Desktop */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="hidden !h-12 min-w-[100px] items-center justify-center rounded-xl border border-secondary py-2 text-sm font-semibold text-[#21C179] hover:bg-transparent hover:text-[#21C179] dark:border-primary md:flex md:!h-14 md:text-base"
              asChild
            >
              <Link href={`/booking-seat/${movieId}`}>{showTime}</Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="relative bottom-3 overflow-visible border-secondary before:absolute before:-bottom-4 before:left-1/2 before:-z-10 before:h-8 before:w-8 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-secondary before:bg-popover">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center p-2">
                <p className="text-center text-sm font-semibold">₹ 200</p>
                <p className="text-center text-sm font-semibold uppercase text-[#21C179]">
                  Available
                </p>
              </div>
              <div className="flex flex-col items-center p-2">
                <p className="text-center text-sm font-semibold">₹ 200</p>
                <p className="text-center text-sm font-semibold uppercase text-[#21C179]">
                  Available
                </p>
              </div>
              <div className="flex flex-col items-center p-2">
                <p className="text-center text-sm font-semibold">₹ 200</p>
                <p className="text-center text-sm font-semibold uppercase text-[#21C179]">
                  Available
                </p>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
