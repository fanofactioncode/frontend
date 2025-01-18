import { LucideArrowRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

import { UpcomingShowsDesktopSkeleton } from "@/components/skeleton/home/upcoming-shows-desktop-skeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import env from "@/lib/env";
import { Pagination } from "@/types/pagination";
import { Show } from "@/types/show.type";

import { UpcomingShowsDesktop } from "./upcoming-shows-desktop";
import { UpcomingShowsMobile } from "./upcoming-shows-mobile";

async function getShows(): Promise<Pagination<Show>> {
  const res = await fetch(env.NEXT_PUBLIC_API_URL + "/shows?limit=5&page=2", {
    next: { revalidate: 60 },
  });
  return await res.json();
}

export function UpcomingShows() {
  const shows = getShows();
  return (
    <section className="py-5 md:py-24">
      <div className="container space-y-2 md:space-y-3">
        <Badge className="rounded-xl">Next to watch</Badge>
        <div className="flex items-center justify-between">
          <h2 className="flex-1 truncate text-2xl font-bold text-text md:text-4xl">
            Upcoming Shows
          </h2>

          <Button
            className="flex h-auto items-center gap-1 rounded-none bg-transparent p-0 px-1 py-1.5 text-xs text-[#FF499E] focus-within:border-none focus-within:outline-none hover:bg-transparent focus:border-none focus:outline-none md:text-sm"
            asChild
          >
            <Link href="/events" className="flex items-center gap-1">
              View All
              <LucideArrowRight className="size-6" />
            </Link>
          </Button>
        </div>
      </div>

      <Suspense fallback={<UpcomingShowsDesktopSkeleton />}>
        <UpcomingShowsDesktop getShows={shows} />
      </Suspense>
      <UpcomingShowsMobile getShows={shows} />
    </section>
  );
}
