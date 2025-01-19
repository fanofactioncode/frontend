import { Metadata } from "next";
import { Suspense } from "react";

import PageLayout from "@/components/layout/page-layout";

import MovieRequestForm from "./_components/form";

export const metadata: Metadata = {
  title: "Request Your Favorite Movies for Rerelease",
  description:
    "FanOfAction lets you bring your favorite movies back to theaters. Request iconic films for rerelease and join the movement to relive cinematic magic on the big screen!",
  keywords:
    "rereleases, movie rereleases, request a movie, bring movies back to theaters, FanOfAction, favorite movie rereleases, iconic films, cinema requests, theater rereleases, cult classics FanOfAction, fan of action, fan action, fanofaction",
};

export default function RequestMoviePage() {
  return (
    <PageLayout>
      <main className="container py-16 sm:py-24 sm:pb-40">
        <h1 className="mx-auto max-w-[850px] text-balance text-center text-4xl font-bold leading-snug text-text sm:text-6xl sm:font-extrabold">
          Request your{" "}
          <span className="rounded-xl bg-[#B9F18C] px-1.5 py-0.5 dark:bg-[#FF499E]">
            movie
          </span>{" "}
          now!
        </h1>
        <p className="mx-auto mt-4 max-w-[750px] text-center text-sm text-text-sub sm:text-base">
          Have a favorite film you’d love to see on the big screen again?
          Suggest your favorite classics, blockbusters, or hidden gems for
          re-release in theaters
        </p>

        <Suspense fallback={<h1>Loading...</h1>}>
          <MovieRequestForm />
        </Suspense>
      </main>
    </PageLayout>
  );
}
