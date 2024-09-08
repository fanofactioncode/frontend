import PageLayout from "@/components/layout/page-layout";

import UpcomingShows from "./upcoming-shows";

export default function Home() {
  return (
    <PageLayout>
      <main className="container py-16">
        <div className="space-y-4">
          <h1 className="text-balance text-center text-3xl font-bold text-text">
            Epic{" "}
            <span className="rounded-xl bg-[#B9F18C] px-1.5 py-0.5 dark:bg-[#FF499E]">
              Cinematic
            </span>{" "}
            Revival: The Return of a Blockbuster - Movie Rerelease Spectacular!
          </h1>
          <p className="text-center text-sm text-text-sub">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quam aliquam id nam? Incidunt quidem voluptatibus facilis soluta
            itaque eveniet!
          </p>
        </div>
      </main>

      <UpcomingShows />
    </PageLayout>
  );
}
