import { Metadata } from "next";

import env from "@/lib/env";
import { RecentlyShow } from "@/types/show.type";

import RunningShows from "./_components/running-shows";
import UpcomingMovies from "./_components/upcoming-movies";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The Ultimate Destination for Movie Rereleases",
  description:
    "FanOfAction brings you the latest updates on movie rereleases, iconic films returning to theaters. Join us to relive cinematic magic like never before!",
};

async function getCurrentlyRunningShows(): Promise<RecentlyShow[]> {
  const res = await fetch(env.NEXT_PUBLIC_API_URL + "/shows/popular?page=1", {
    next: { revalidate: 60 },
  });
  return await res.json();
}

export default async function EventsPage() {
  const shows = await getCurrentlyRunningShows();

  return (
    <>
      <RunningShows shows={shows} />
      <UpcomingMovies />
    </>
  );
}
