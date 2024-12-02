import type { IMovieDbMovie } from "@/types/movies";

export async function getMovieDetails(id: string): Promise<IMovieDbMovie> {
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
