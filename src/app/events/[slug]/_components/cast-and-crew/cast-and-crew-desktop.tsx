import Image from "next/image";

import { Artist } from "@/types/show.type";

export interface CastAndCrewProps {
  artists: Artist[];
}

export async function CastAndCrewDesktop({ artists }: CastAndCrewProps) {
  return (
    <section className="container hidden space-y-11 pb-36 pt-5 sm:block">
      <h2 className="text-3xl font-bold text-text">Cast & Crew</h2>

      <div className="flex flex-wrap gap-4">
        {artists?.map((cast) => (
          <div key={cast.id} className="w-[120px]">
            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-xl">
              <Image
                src={cast.people.profile_picture_url}
                alt={cast.people.name}
                fill
                className="w-full object-cover"
              />
            </div>
            <p className="mt-2 w-full text-balance font-semibold text-text">
              {cast.people.name}
            </p>
            <p className="w-full text-balance text-sm text-text-sub">
              {cast.character_name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
