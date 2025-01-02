import MovieCard from "@/components/common/movie-card";
import { Pagination } from "@/types/pagination";
import { Show } from "@/types/show.type";

async function getUpcomingMovies(): Promise<Pagination<Show>> {
  const url = "https://dev-api-v2.fanofaction.com/shows";
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
      {shows.map(({ movie, id }) => (
        <MovieCard
          key={movie.id}
          id={String(id)}
          name={movie.title}
          languages={[movie.original_language as any]}
          poster={String(movie.poster_url)}
          rating={Number(movie.rating)}
        />
      ))}
    </div>
  );
}
