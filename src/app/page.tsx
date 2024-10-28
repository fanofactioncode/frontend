import Link from "next/link";
import Image from "next/image";
import { LucideArrowRight } from "lucide-react";

import { PlayIcon } from "@/components/icons";
import PageLayout from "@/components/layout/page-layout";
import { PreviousEvents } from "@/components/common/previous-events";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import UpcomingShows from "./upcoming-shows";
import SuggestMovie from "./suggest-movie";
import UpcomingMovieItem, {
  Languages,
} from "./events/_components/upcoming-movies/upcoming-movie-item";

const movies = [
  {
    name: "Deadpool & Wolverine",
    languages: ["English", "हिन्दी", "தமிழ்"],
    poster: "/assets/deadpool-and-wolverine.png",
    rating: 8,
  },
  {
    name: "Bad Boys: Ride or Die",
    languages: ["English", "हिन्दी", "தமிழ்"],
    poster: "/assets/bad-boys-ride-or-die.png",
    rating: 8,
  },
  {
    name: "Inside Out 2",
    languages: ["English"],
    poster: "/assets/inside-out.png",
    rating: 8,
  },
  {
    name: "Kingdom of the Planet of the Apes",
    languages: ["English", "हिन्दी"],
    poster: "/assets/planet-of-the-apes-potrate.png",
    rating: 8,
  },
  {
    name: "Kingdom of the Planet of the Apes",
    languages: ["English", "हिन्दी"],
    poster: "/assets/planet-of-the-apes-potrate.png",
    rating: 8,
  },
];

export default function Home() {
  return (
    <PageLayout>
      <main className="container flex max-w-[970px] flex-col gap-8 py-16">
        <div className="space-y-4 md:space-y-8">
          <h1 className="text-balance text-center text-4xl font-extrabold text-text md:text-5xl md:leading-tight">
            Epic{" "}
            <span className="rounded-xl bg-[#B9F18C] px-1.5 py-0.5 dark:bg-[#FF499E]">
              Cinematic
            </span>{" "}
            Revival: The Return of a Blockbuster - Movie Rerelease Spectacular!
          </h1>
          <p className="text-center text-sm text-text-sub md:px-32 md:text-base">
            Lorem ipsum dolor sit amet consectetur. Viverra euismod duis aliquam
            ipsum. Ac senectus turpis sed sagittis nulla feugiat vulputate.
            Massa vulputate donec ligula elit ut. Viverra eros ut morbi auctor
            odio enim.
          </p>
        </div>

        <div className="relative md:mt-20">
          <svg
            id="polygon"
            width="53"
            height="49"
            viewBox="0 0 53 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-6 -left-3"
          >
            <path
              d="M52.4724 0.959063L32.1694 48.7899L0.898212 7.29158L52.4724 0.959063Z"
              fill="#E9EB87"
            />
          </svg>

          <svg
            id="thunder"
            width="66"
            height="37"
            viewBox="0 0 66 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -right-2 -top-4"
          >
            <path
              d="M4.16489 34.777L10.3715 19.3261L27.2649 26.6138L29.2286 12.6623L45.1793 20.2831L48.5572 5.83185L63.565 13.7859"
              stroke="#FF499E"
              strokeWidth="7"
            />
          </svg>

          <div className="relative aspect-video overflow-hidden rounded-2xl border-4 border-secondary md:rounded-3xl md:border-8">
            <Image
              src="/video-thumbnail.jpg"
              alt="Fan of action intro video thumbnail"
              width={0}
              height={0}
              sizes="100vw"
              objectFit="cover"
              className="h-auto w-full"
            />

            <PlayIcon
              color="white"
              className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 md:size-24"
            />
          </div>
        </div>
      </main>

      <section className="hidden py-24 md:block">
        <div className="container space-y-2 md:space-y-3">
          <Badge className="rounded-xl">Next to watch</Badge>
          <div className="flex items-center justify-between">
            <h2 className="flex-1 truncate text-4xl font-bold text-text">
              Upcoming Shows
            </h2>

            <Button
              className="flex h-auto items-center gap-1 rounded-none bg-transparent p-0 px-1 py-1.5 text-sm text-[#FF499E] focus-within:border-none focus-within:outline-none hover:bg-transparent focus:border-none focus:outline-none"
              asChild
            >
              <Link href="/events" className="flex items-center gap-1">
                View All
                <LucideArrowRight className="size-6" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="container">
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-8 md:grid-cols-5">
            {movies.map(({ name, languages, poster, rating }, index) => (
              <UpcomingMovieItem
                key={name + index}
                languages={languages as Languages[]}
                name={name}
                poster={poster}
                rating={rating}
              />
            ))}
          </div>
        </div>
      </section>
      <UpcomingShows />
      <SuggestMovie />
      <PreviousEvents />
    </PageLayout>
  );
}
