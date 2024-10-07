"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { MapIcon, MovieIcon } from "@/components/icons";

import ItemPicker from "./item-picker";
import Divider from "./divider";

export default function MovieRequestForm() {
  const router = useRouter();

  return (
    <>
      <div className="mx-auto mt-8 flex max-w-[890px] flex-col overflow-hidden rounded-2xl border border-secondary dark:border-primary sm:mt-12 sm:flex-row sm:items-center sm:gap-6">
        <ItemPicker
          Icon={MovieIcon}
          title="Movie"
          text="Which movie do you want to see ?"
          onClick={() => router.push("/request-movie/select-movie")}
        />

        <div className="px-6 py-0 sm:px-0 sm:py-6">
          <Divider />
        </div>

        <ItemPicker
          Icon={MapIcon}
          title="Location"
          text="Which city you want to see ?"
          onClick={() => router.push("/request-movie/select-city")}
        />

        <div className="hidden p-6 ps-0 sm:flex">
          <Button className="px-12">Submit</Button>
        </div>
      </div>

      <Button className="mt-8 w-full sm:hidden">Submit</Button>
    </>
  );
}
