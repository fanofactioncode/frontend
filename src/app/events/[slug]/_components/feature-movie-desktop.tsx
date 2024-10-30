import { Badge } from "@/components/ui/badge";
import MovieCard, { MovieCardProps } from "@/components/common/movie-card";

export function FeatureMovesDesktop({ movies }: { movies: MovieCardProps[] }) {
  return (
    <section className="container hidden space-y-3 pb-24 sm:block">
      <Badge className="rounded-xl">Feature movies</Badge>
      <h2 className="text-3xl font-bold text-text">
        You might also intrested in
      </h2>

      <div className="!mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-8 md:grid-cols-5">
        {movies.map((movie, index) => (
          <MovieCard key={movie.name + index} {...movie} />
        ))}
      </div>
    </section>
  );
}
