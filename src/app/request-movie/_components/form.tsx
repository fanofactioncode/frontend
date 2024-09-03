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
      <div className="mx-auto mt-8 flex max-w-[750px] flex-col gap-6 rounded-2xl border border-secondary p-6 dark:border-primary sm:mt-12 sm:flex-row sm:items-center">
        <ItemPicker
          Icon={MovieIcon}
          title="Movie"
          text="Which movie do you want to see ?"
          onClick={() => router.push("/request-movie/select-movie")}
        />

        <Divider />

        <ItemPicker
          Icon={MapIcon}
          title="Location"
          text="Which city you want to see ?"
          onClick={() => router.push("/request-movie/select-city")}
        />

        <Button className="hidden sm:flex">Submit</Button>
      </div>

      <Button className="mt-8 w-full sm:hidden">Submit</Button>
    </>
  );
}
