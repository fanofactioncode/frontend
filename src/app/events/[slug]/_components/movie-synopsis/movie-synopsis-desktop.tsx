import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getMovieDetails } from "@/services/movies";
import { numberToMovieRuntime } from "@/utils/number-to-movie-runtime";

import { PlayButtonWithVideoDialog } from "../play-button-with-video-dialog";

export async function MovieSysnopsisDesktop({ id }: { id: string }) {
  const movieDetails = await getMovieDetails(id);

  return (
    <div className="container hidden py-5 sm:block">
      <div className="relative h-[600px] overflow-hidden rounded-3xl">
        <Image
          src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
          alt="Platnet of the Apes"
          className="-z-10 h-full w-full object-cover"
          fill
        />
        <div className="z-50 flex h-full items-start gap-[1.875rem] bg-gradient-to-r from-primary from-35% via-primary/80 via-75% to-transparent to-100% p-[3.75rem] dark:from-secondary dark:via-secondary/80 sm:w-full md:w-9/12">
          <div className="relative w-52 shrink-0 overflow-hidden rounded-xl">
            <Image
              src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
              alt="Planet of the Apes"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
              priority
            />
            <PlayButtonWithVideoDialog />
          </div>
          <div className="mt-4 space-y-5">
            <h1 className="text-3xl font-bold text-white">
              {movieDetails.title}
            </h1>
            <p className="text-sm text-white">{movieDetails.overview}</p>
            <p className="text-sm text-white">
              {movieDetails.genres.map((g) => g.name).join(", ")}
            </p>
            <div className="flex items-center gap-3">
              <Badge className="border-none bg-[#ABB7C4] dark:bg-[#ABB7C4] dark:text-black">
                {numberToMovieRuntime(movieDetails.runtime)}
              </Badge>
              <Badge className="flex items-center gap-2 border-none bg-[#ABB7C4] dark:bg-[#ABB7C4] dark:text-black">
                {Math.floor(movieDetails.vote_average)}
                <StarIcon size={14} />
              </Badge>
            </div>

            <div></div>
            <Link href={`/booking/the-ministry-of-ungentlemanly-warfare`}>
              <Button className="mt-11 bg-white text-primary hover:bg-white/65 dark:text-secondary">
                Book Tickets
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
