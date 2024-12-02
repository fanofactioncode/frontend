import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { numberToMovieRuntime } from "@/utils/number-to-movie-runtime";

import { PlayButtonWithVideoDialog } from "../play-button-with-video-dialog";

async function getMovieDetails(id: string): Promise<{
  adult: false;
  backdrop_path: string;
  belongs_to_collection: {
    id: 727761;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: 2000000;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: [string];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    },
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    },
  ];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    },
  ];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}> {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzUxYmYwZjgwODZmMDMxNThjOWJjZjcwNjgyYTdlOSIsIm5iZiI6MTczMTk1MjEyNy4zODI2MDUsInN1YiI6IjY3M2I3Y2YzNzRhMmU2ZTAyMzdiNzE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aaRUfQH3uiPNPba6BTKkqD1YuTnB8V4sSq3jae6dIO8",
    },
  };

  const response = await fetch(url, options);
  return response.json();
}

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
