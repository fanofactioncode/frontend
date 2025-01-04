export type Show = {
  id: number;
  movie_id: number;
  release_date: Date;
  created_at: Date;
  slug: string;
  updated_at: Date;
  movie: ShowMovie;
};

export type ShowMovie = {
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
  genres?: Geners[];
};

type People = {
  id: number;
  name: string;
  birth_date: Date;
  death_date: Date | null;
  bio: string;
  profile_picture_url: string;
  created_at: Date;
  updated_at: Date;
};

export type Geners = {
  id: number;
  name: string;
};

export type Artist = {
  id: number;
  movie_id: number;
  person_id: number;
  role: string;
  index: number;
  character_name: string;
  created_at: Date;
  updated_at: Date;
  people: People;
};

export type ShowDetails = Show & {
  movie: ShowMovie & {
    artists: Artist[];
  };
};

export type RecentlyShow = Show & {
  highlight_index: number;
  movie: ShowMovie & {
    genres: Geners[];
  };
};
