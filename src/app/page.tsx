import { Metadata } from "next";

import { PreviousEvents } from "@/components/common/previous-events";
import PageLayout from "@/components/layout/page-layout";

import { HeroSection } from "./_components/hero-section";
import { SuggestMovie } from "./_components/suggest-movie";
import { UpcomingShows } from "./_components/upcoming-shows";

export const metadata: Metadata = {
  title: "Movie Re-Releases | FanOfAction",
  description:
    "FanOfAction brings your favorite classic and blockbuster movies back to the big screen. Stay updated on upcoming rereleases, exclusive events, and unforgettable cinema experiences!",
  keywords: [
    "movie rereleases",
    "classic movies in theaters",
    "blockbuster rereleases",
    "cinema events",
    "FanOfAction",
    "fan of action",
    "fan action",
    "fanofaction",
    "upcoming movie rereleases",
    "special movie screenings",
    "retro movies",
    "big screen experiences",
    "classic movie screenings",
    "favorite movies rereleased",
  ],
};

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <UpcomingShows />
      <SuggestMovie />
      <PreviousEvents />
    </PageLayout>
  );
}
