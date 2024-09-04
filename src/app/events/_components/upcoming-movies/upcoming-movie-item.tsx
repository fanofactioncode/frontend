import React from "react";
import Image from "next/image";
import Link from "next/link";

type Languages = "English" | "हिन्दी" | "தமிழ்";

export interface UpcomingMovieItemProps {
  poster: string;
  name: string;
  languages: Languages[];
  rating: number;
}

export default function UpcomingMovieItem({
  poster,
  name,
  languages,
  rating,
}: UpcomingMovieItemProps) {
  return (
    <Link href={`/events/${name}`} className="space-y-2 overflow-hidden">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={poster}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
      <div className="space-y-1.5">
        <h2 className="truncate text-sm font-semibold text-text">{name}</h2>
        <p className="truncate text-xs text-text-sub">
          {languages.join(" | ")}
        </p>
        <div className="flex items-center gap-2">
          <Image src="/imdb-logo.svg" width={30} height={30} alt="IMDb" />
          <p className="text-xs text-text-sub">{rating}/10</p>
        </div>
      </div>
    </Link>
  );
}
