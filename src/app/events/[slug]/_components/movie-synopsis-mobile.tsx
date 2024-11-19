import Image from "next/image";

import { PlayIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { numberToMovieRuntime } from "@/utils/number-to-movie-runtime";

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

export async function MovieSysnopsisMobile({ id }: { id: string }) {
  const movieDetails = await getMovieDetails(id);

  return (
    <div className="container sm:hidden">
      <div className="group relative my-3 h-[166px] overflow-hidden rounded-xl">
        <Image
          src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movieDetails.backdrop_path}`}
          alt="Platnet of the Apes"
          fill
          objectFit="cover"
        />

        <div className="absolute z-10 h-full w-full bg-[radial-gradient(rgba(16,33,50,0)_0%,rgba(16,33,50,0.5)_100%)]"></div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <PlayIcon
            color="white"
            className="size-10 transition-all duration-300 group-hover:scale-125"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <div className="relative w-28 overflow-hidden rounded-lg">
          <Image
            src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movieDetails.poster_path}`}
            alt="Platnet of the Apes"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <div className="mt-3 flex-1 space-y-2">
          <h1 className="text-lg font-bold text-text">{movieDetails.title}</h1>
          <p className="text-[0.75rem] font-medium text-primary">
            {movieDetails.genres.map((genre) => genre.name).join(", ")}
          </p>

          <div className="flex gap-2">
            <Badge className="border-[0.5px]">
              {numberToMovieRuntime(movieDetails.runtime)}
            </Badge>
            <Badge className="flex items-center gap-2 border-[0.5px]">
              <Image src="/imdb-logo.svg" width={26} height={26} alt="IMDb" />
              {Math.floor(movieDetails.vote_average)}
            </Badge>
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-text">{movieDetails.overview}</p>
    </div>
  );
}
