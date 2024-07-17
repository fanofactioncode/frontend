import React from "react";
import Image from "next/image";

export interface MovieListItemProps {
  thumbnail: string;
  title: string;
}

export default function MovieListItem({
  title,
  thumbnail,
}: MovieListItemProps) {
  return (
    <div className="cursor-pointer w-[280px] border transition-all duration-300 hover:bg-green border-secondary rounded-2xl p-1">
      <div className="relative w-full h-[400px]">
        <Image
          src={thumbnail}
          alt="movie"
          className="rounded-2xl object-cover"
          fill
        />
      </div>

      <h4 className="text-center truncate py-3 px-4 text-black font-semibold">
        {title}
      </h4>
    </div>
  );
}
