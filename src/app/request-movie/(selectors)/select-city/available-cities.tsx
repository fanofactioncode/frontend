import Link from "next/link";

import { City } from "@/types/cities";

export function AvailableCities({ cities }: { cities: City[] }) {
  return (
    <div className="container space-y-6 py-4">
      <h2 className="text-base font-semibold text-text">
        Currently available on these cities
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {cities.map((city) => (
          <Link
            key={city.id}
            href={`/request-movie?city=${city.name}`}
            className="flex items-center justify-center truncate rounded-xl border border-secondary bg-secondary/30 p-2 text-center text-sm text-text-sub dark:bg-secondary"
          >
            {city.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
