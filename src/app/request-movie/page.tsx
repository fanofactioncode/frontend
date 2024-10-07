import React from "react";

import PageLayout from "@/components/layout/page-layout";

import MovieRequestForm from "./_components/form";

export default function RequestMoviePage() {
  return (
    <PageLayout>
      <main className="container py-16 sm:py-24 sm:pb-40">
        <h1 className="mx-auto max-w-[850px] text-center text-4xl font-bold leading-snug text-text sm:text-6xl sm:font-extrabold">
          What you want to{" "}
          <span className="rounded-xl bg-[#B9F18C] px-1.5 py-0.5 dark:bg-[#FF499E]">
            watch
          </span>{" "}
          next ?
        </h1>
        <p className="mx-auto mt-2 max-w-[750px] text-center text-sm text-text-sub sm:text-base">
          Tell us what you want to see on your city, and we’ll release it for
          you. We know you want to celebrate the movie we also do the same.
        </p>

        <MovieRequestForm />
      </main>
    </PageLayout>
  );
}
