"use client";

import React from "react";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { LogoIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-10 bg-white">
      <header className="bg-secondary/85 py-2 sm:py-4">
        <div className="container flex items-center justify-between">
          <Button
            variant="ghost"
            className="flex items-center px-0 hover:!bg-transparent sm:p-0 sm:px-2"
            onClick={() => router.back()}
          >
            <ChevronLeftIcon className="size-6 stroke-text" />
            <LogoIcon className="hidden size-11 sm:block" />
          </Button>

          <div className="ms-2 flex w-full flex-1 flex-col items-start justify-center sm:ms-0 sm:items-center">
            <div className="flex flex-1 items-center gap-2">
              <h1 className="text-sm font-bold text-text sm:text-lg">
                The Ministry of Ungentlemanly Warfare
              </h1>
              <div className="size-1.5 rounded-full bg-text"></div>
              <h1 className="text-sm font-bold text-text sm:text-lg">Hindi</h1>
            </div>
            <p className="text-sm text-text-sub">
              at Cinepolis Vandana, Rajkot
            </p>
          </div>

          <Button
            variant="ghost"
            className="invisible hidden items-center p-0 sm:flex"
          >
            <ChevronLeftIcon className="size-6" />
            <LogoIcon className="size-12" />
          </Button>
        </div>
      </header>

      <div className="border-b bg-background py-2">
        <div className="container flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              className="rounded-xl text-sm font-bold text-primary"
            >
              10:00 AM
            </Button>
            <Button
              variant="default"
              size="sm"
              className="rounded-xl bg-primary text-sm font-bold text-white"
            >
              07 Monday, July
            </Button>
          </div>

          <div className="flex flex-1 items-center justify-between sm:flex-none sm:justify-normal sm:gap-8">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-sm border-2 border-[#B9F18C]"></div>
              <p className="text-xs font-semibold uppercase text-text">
                Available
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="size-4 rounded-sm bg-[#E1E1E1]"></div>
              <p className="text-xs font-semibold uppercase text-text">
                Booked
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="size-4 rounded-sm bg-[#102132]"></div>
              <p className="text-xs font-semibold uppercase text-text">
                Selected
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
