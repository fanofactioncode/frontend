import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Movie } from "@/types/movies";

export interface MovieCardProps extends Movie {
  className?: string;
}

export default function MovieCard({
  id,
  poster,
  name,
  languages,
  rating,
  className,
}: MovieCardProps) {
  return (
    <Link
      href={`/events/${id}`}
      className={cn(
        "shrink-0 space-y-2 overflow-hidden md:space-y-4",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-lg md:rounded-xl">
        <Image
          src={poster}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full"
          priority
        />
      </div>
      <div className="space-y-1.5 md:space-y-2">
        <h2 className="truncate text-sm font-semibold text-text md:text-base">
          {name}
        </h2>
        <p className="truncate text-xs text-text-sub md:text-sm">
          {languages.join(" | ")}
        </p>
        <div className="flex items-center gap-2">
          <Image src="/imdb-logo.svg" width={30} height={30} alt="IMDb" />
          <p className="text-xs text-text-sub md:text-sm">{rating}/10</p>
        </div>
      </div>
    </Link>
  );
}
