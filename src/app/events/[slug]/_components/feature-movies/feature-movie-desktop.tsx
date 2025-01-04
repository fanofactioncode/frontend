import MovieCard from "@/components/common/movie-card";
import { Badge } from "@/components/ui/badge";
import { Show } from "@/types/show.type";

export function FeatureMovesDesktop({ shows }: { shows: Show[] }) {
  return (
    <section className="container hidden space-y-3 pb-24 sm:block">
      <Badge className="rounded-xl">Feature movies</Badge>
      <h2 className="text-3xl font-bold text-text">
        You might also intrested in
      </h2>

      <div className="!mt-8 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-8 md:grid-cols-5">
        {shows.map(({ slug, movie }) => (
          <MovieCard
            key={movie.id}
            slug={slug}
            name={movie.title}
            poster={movie.poster_url ?? ""}
            rating={movie.rating as number}
            languages={[movie.original_language as any]}
          />
        ))}
      </div>
    </section>
  );
}
