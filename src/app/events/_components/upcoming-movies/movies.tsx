import MovieCard from "@/components/common/movie-card";

async function getUpcomingMovies(): Promise<{
  dates: {
    minimum: string;
    maximum: string;
  };
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  total_pages: number;
  total_results: number;
}> {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzUxYmYwZjgwODZmMDMxNThjOWJjZjcwNjgyYTdlOSIsIm5iZiI6MTczMTk1MjEyNy4zODI2MDUsInN1YiI6IjY3M2I3Y2YzNzRhMmU2ZTAyMzdiNzE1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aaRUfQH3uiPNPba6BTKkqD1YuTnB8V4sSq3jae6dIO8",
    },
  };

  const resonse = await fetch(url, options);
  return resonse.json();
}

export default async function Movies() {
  const { results: movies } = await getUpcomingMovies();

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-8 md:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id.toString()}
          name={movie.title}
          languages={["English"]}
          poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          rating={Math.floor(movie.vote_average)}
        />
      ))}
    </div>
  );
}
