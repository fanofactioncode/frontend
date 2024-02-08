import Image from "next/image";
import React from "react";

export interface CastItemProps {
  name: string;
  url: string;
}

export default function CastItem({ name, url }: Readonly<CastItemProps>) {
  return (
    <div className="space-y-2">
      <div className="relative h-14 w-14">
        <Image src={url} alt={name} fill />
      </div>
      <p className="text-gray-400 text-sm">{name}</p>
    </div>
  );
}
