import MovieCard from "@/components/common/movie-card";
import { Movie } from "@/types/movies";

export interface UpcomingShowsDesktopProps {
  movies: Movie[];
}

export async function UpcomingShowsDesktop({
  movies,
}: UpcomingShowsDesktopProps) {
  await new Promise((resolve) => setTimeout(resolve, 10_000));

  return (
    <div className="container hidden md:block">
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-8 md:grid-cols-5">
        {movies.map((movie, index) => (
          <MovieCard key={movie.name + index} {...movie} />
        ))}
      </div>
    </div>
  );
}
