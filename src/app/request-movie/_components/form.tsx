"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { MapIcon, MovieIcon, TrendingIcon } from "@/components/icons";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import SearchInput from "../(selectors)/_components/search-input";

import ItemPicker from "./item-picker";
import Divider from "./divider";

export default function MovieRequestForm() {
  const router = useRouter();
  const [isMovieDialogOpen, setIsMovieDialogOpen] = useState<boolean>(false);
  const [isCityDialogOpen, setIsCityDialogOpen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    function calculateScreenWidth() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", calculateScreenWidth);
    calculateScreenWidth();

    return () => {
      window.removeEventListener("resize", calculateScreenWidth);
    };
  }, []);

  return (
    <>
      <div className="mx-auto mt-8 flex max-w-[890px] flex-col overflow-hidden rounded-2xl border border-secondary dark:border-primary sm:mt-12 sm:flex-row sm:items-center sm:gap-6">
        <ItemPicker
          Icon={MovieIcon}
          title="Movie"
          text="Which movie do you want to see ?"
          onClick={() => {
            if (screenWidth >= 760) {
              setIsMovieDialogOpen(true);
            } else {
              router.push("/request-movie/select-movie");
            }
          }}
        />

        <div className="px-6 py-0 sm:px-0 sm:py-6">
          <Divider />
        </div>

        <ItemPicker
          Icon={MapIcon}
          title="Location"
          text="Which city you want to see ?"
          onClick={() => {
            if (screenWidth >= 760) {
              setIsCityDialogOpen(true);
            } else {
              router.push("/request-movie/select-city");
            }
          }}
        />

        <div className="hidden p-6 ps-0 sm:flex">
          <Button className="px-12">Submit</Button>
        </div>
      </div>

      <Button className="mt-8 w-full sm:hidden">Submit</Button>

      <Dialog open={isMovieDialogOpen} onOpenChange={setIsMovieDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Suggest a movie</DialogTitle>
          </DialogHeader>

          <SearchInput placeholder="Search your movie" />

          <div className="mt-2 flex-1 space-y-2">
            <h2 className="text-lg font-semibold text-text">Top Searched</h2>

            <div className="">
              <Link
                href="/request-movie?movie=Andaj Apna Apna"
                className="flex w-full items-center justify-between border-b border-secondary py-3 text-text"
              >
                <span>Andaj Apna Apna</span>

                <div className="flex items-center gap-1">
                  <span>22k</span>
                  <TrendingIcon size={20} className="fill-primary" />
                </div>
              </Link>

              <Link
                href="/request-movie?movie=3 Idiots"
                className="flex w-full items-center justify-between border-b border-secondary py-3 text-text"
              >
                <span>3 Idiots</span>

                <div className="flex items-center gap-1">
                  <span>22k</span>
                  <TrendingIcon size={20} className="fill-primary" />
                </div>
              </Link>

              <Link
                href="/request-movie?movie=Terminator 2 : Judgement Day"
                className="flex w-full items-center justify-between border-b border-secondary py-3 text-text"
              >
                <span>Terminator 2 : Judgement Day</span>

                <div className="flex items-center gap-1">
                  <span>22k</span>
                  <TrendingIcon size={20} className="fill-primary" />
                </div>
              </Link>
            </div>
          </div>

          <DialogFooter>
            <DialogClose>
              <Button
                className="px-8"
                onClick={() => {
                  setIsCityDialogOpen(true);
                }}
              >
                Next
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isCityDialogOpen} onOpenChange={setIsCityDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick your city</DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <h2 className="text-lg font-semibold text-text">
              Currently available on these cities
            </h2>

            <div className="grid grid-cols-5 gap-3">
              <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2 dark:bg-secondary">
                <p className="truncate text-center text-text-sub">Rajkot</p>
              </div>
              <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2 dark:bg-secondary">
                <p className="truncate text-center text-text-sub">Morbi</p>
              </div>
              <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2 dark:bg-secondary">
                <p className="truncate text-center text-text-sub">Ahmedabad</p>
              </div>
              <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2 dark:bg-secondary">
                <p className="truncate text-center text-text-sub">
                  Bhubaneshwar
                </p>
              </div>
              <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2 dark:bg-secondary">
                <p className="truncate text-center text-text-sub">Mumbai</p>
              </div>
              <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2 dark:bg-secondary">
                <p className="truncate text-center text-text-sub">Delhi</p>
              </div>
            </div>
          </div>

          <SearchInput placeholder="Search your city" />

          <div className="py-4">
            <h2 className="text-lg font-semibold text-text">
              In which city you want us to reach ?
            </h2>

            <div className="mt-3 grid h-[200px] grid-cols-4 gap-2 overflow-y-auto">
              {Array.from({ length: 100 }).map((i, index) => (
                <Link
                  key={`_${index}`}
                  href="http://google.com"
                  className="block text-text-sub"
                >
                  Lorem, ipsum. {index}
                </Link>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
