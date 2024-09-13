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
      <header className="bg-[#F1F8FE] py-4">
        <div className="container flex items-center justify-between">
          <Button
            variant="ghost"
            className="flex items-center p-0"
            onClick={() => router.back()}
          >
            <ChevronLeftIcon className="size-6" />
            <LogoIcon className="size-12" />
          </Button>

          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">
                The Ministry of Ungentlemanly Warfare
              </h1>
              <div className="size-1.5 rounded-full bg-black"></div>
              <h1 className="text-xl font-bold">Hindi</h1>
            </div>
            <p className="text-text">at Cinepolis Vandana, Rajkot</p>
          </div>

          <Button variant="ghost" className="invisible flex items-center p-0">
            <ChevronLeftIcon className="size-6" />
            <LogoIcon className="size-12" />
          </Button>
        </div>
      </header>

      <div className="border-b py-2">
        <div className="container flex items-center justify-between">
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

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="size-5 rounded-sm border-2 border-[#B9F18C]"></div>
              <p className="text-sm font-semibold uppercase">Available</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="size-5 rounded-sm bg-[#E1E1E1]"></div>
              <p className="text-sm font-semibold uppercase">Booked</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="size-5 rounded-sm bg-[#102132]"></div>
              <p className="text-sm font-semibold uppercase">Selected</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
