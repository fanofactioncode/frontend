import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { getShowDetails } from "@/services/shows";
import { numberToMovieRuntime } from "@/utils/number-to-movie-runtime";

import { PlayButtonWithVideoDialog } from "../play-button-with-video-dialog";

export async function MovieSysnopsisMobile({ id }: { id: string }) {
  const { movie: movieDetails } = await getShowDetails(id);

  return (
    <div className="container sm:hidden">
      <div className="group relative my-3 h-[166px] overflow-hidden rounded-xl">
        <Image
          src={movieDetails.cover_poster_url ?? ""}
          alt={`${movieDetails.title}'s cover poster`}
          fill
          objectFit="cover"
        />

        <div className="absolute z-10 h-full w-full bg-[radial-gradient(rgba(16,33,50,0)_0%,rgba(16,33,50,0.5)_100%)]"></div>

        <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
          <PlayButtonWithVideoDialog
            trailerURL={movieDetails.trailer_url ?? ""}
          />
        </div>
      </div>

      <div className="flex gap-3">
        <div className="relative w-28 overflow-hidden rounded-lg">
          <Image
            src={movieDetails.poster_url ?? ""}
            alt={`${movieDetails.title}'s poster`}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        <div className="mt-3 flex-1 space-y-2">
          <h1 className="text-lg font-bold text-text">{movieDetails.title}</h1>
          <p className="text-[0.75rem] font-medium text-primary">
            {movieDetails.genres?.map((genre) => genre.name).join(", ")}
          </p>

          <div className="flex gap-2">
            <Badge className="border-[0.5px]">
              {numberToMovieRuntime(movieDetails.duration)}
            </Badge>
            <Badge className="flex items-center gap-2 border-[0.5px]">
              <Image src="/imdb-logo.svg" width={26} height={26} alt="IMDb" />
              {Math.floor(Number(movieDetails.rating))}
            </Badge>
          </div>
        </div>
      </div>

      <p className="mt-8 text-sm text-text">{movieDetails.description}</p>
    </div>
  );
}
