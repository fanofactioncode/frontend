import MovieCard from "@/components/common/movie-card";
import { Pagination } from "@/types/pagination";
import { Show } from "@/types/show.type";

export interface UpcomingShowsDesktopProps {
  getShows: Promise<Pagination<Show>>;
}

export async function UpcomingShowsDesktop({
  getShows,
}: UpcomingShowsDesktopProps) {
  const shows = await getShows;

  return (
    <div className="container hidden md:block">
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-8 md:grid-cols-5">
        {shows?.data?.map((show) => (
          <MovieCard
            key={show.id}
            id={show.id.toString()}
            languages={[show.movie.original_language as any]}
            name={show.movie.title}
            poster={show.movie.poster_url ?? ""}
            rating={show.movie.rating as number}
          />
        ))}
      </div>
    </div>
  );
}
