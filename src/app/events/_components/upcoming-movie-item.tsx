import React from "react";
import Image from "next/image";

type Languages = "English" | "हिन्दी" | "தமிழ்";

export interface UpcomingMovieItemProps {
  name: string;
  languages: Languages[];
  rating: number;
}

export default function UpcomingMovieItem({
  name,
  languages,
  rating,
}: UpcomingMovieItemProps) {
  return (
    <div className="space-y-2 overflow-hidden">
      <div className="h-52 rounded-lg bg-gray-400"></div>
      <div className="space-y-1.5">
        <h2 className="truncate text-sm font-semibold text-text">{name}</h2>
        <p className="truncate text-xs text-text-sub">
          {languages.join(" | ")}
        </p>
        <div className="flex items-center gap-2">
          <Image src="/imdb-logo.svg" width={30} height={30} alt="IMDb" />
          <p className="text-xs text-text-sub">{rating} / 10</p>
        </div>
      </div>
    </div>
  );
}
