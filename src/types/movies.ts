export type Languages = "English" | "हिन्दी" | "தமிழ்";

export type Movie = {
  id?: string;
  name: string;
  poster: string;
  languages: Languages[];
  rating: number;
};

export type IMovieDbGenre = {
  id: number;
  name: string;
};

export type IMovieDbProductionCompany = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type IMovieDbProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type IMovieDbCollection = {
  iso_3166_1: string;
  name: string;
};

export type IMovieDbSpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type IMovieDbMovie = {
  adult: false;
  backdrop_path: string;
  belongs_to_collection: IMovieDbCollection;
  budget: number;
  genres: IMovieDbGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IMovieDbProductionCompany[];
  production_countries: IMovieDbProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: IMovieDbSpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
