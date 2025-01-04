import MovieCard from "@/components/common/movie-card";
import env from "@/lib/env";
import { Pagination } from "@/types/pagination";
import { Show } from "@/types/show.type";

async function getUpcomingMovies(): Promise<Pagination<Show>> {
  const url = env.NEXT_PUBLIC_API_URL + "/shows";
  const options = {
    headers: {
      accept: "application/json",
    },
    next: { revalidate: 60 },
  };

  const resonse = await fetch(url, options);
  return resonse.json();
}

export default async function Movies() {
  const { data: shows } = await getUpcomingMovies();

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-8 md:grid-cols-5">
      {shows.map(({ slug, movie }) => (
        <MovieCard
          key={movie.id}
          slug={slug}
          name={movie.title}
          languages={[movie.original_language as any]}
          poster={String(movie.poster_url)}
          rating={Number(movie.rating)}
        />
      ))}
    </div>
  );
}
