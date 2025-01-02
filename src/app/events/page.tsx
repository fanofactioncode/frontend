import env from "@/lib/env";
import { RecentlyShow } from "@/types/show.type";

import RunningShows from "./_components/running-shows";
import UpcomingMovies from "./_components/upcoming-movies";

export const dynamic = "force-dynamic";

async function getCurrentlyRunningShows(): Promise<RecentlyShow[]> {
  const res = await fetch(env.NEXT_PUBLIC_API_URL + "/shows/popular", {
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
