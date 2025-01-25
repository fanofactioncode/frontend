export type SuggestionMovie = {
  id: number;
  title: string;
  description: string;
  duration: number;
  initial_release_date: Date;
  original_language: string;
  rating: string | number;
  age_rating: string;
  trailer_url: string | null;
  poster_url: string | null;
  cover_poster_url: string | null;
  logo_url: string | null;
};

export type SuggestionSearch = {
  id: number;
  name: string;
};
