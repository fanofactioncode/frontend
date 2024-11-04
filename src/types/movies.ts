export type Languages = "English" | "हिन्दी" | "தமிழ்";

export type Movie = {
  id?: string;
  name: string;
  poster: string;
  languages: Languages[];
  rating: number;
};
