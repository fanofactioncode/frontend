import PageLayout from "@/components/layout/page-layout";
import { PreviousEvents } from "@/components/common/previous-events";

import { SuggestMovie } from "./_components/suggest-movie";
import { HeroSection } from "./_components/hero-section";
import { UpcomingShows } from "./_components/upcoming-shows";

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
