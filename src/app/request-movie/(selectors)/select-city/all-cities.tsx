import Link from "next/link";

import { City } from "@/types/cities";

export function AllCities({ cities }: { cities: City[] }) {
  return (
    <div className="py-4">
      <h2 className="px-4 text-base font-semibold text-text">
        In which city you want us to reach ?
      </h2>

      <div className="mt-3">
        {cities.map((city) => (
          <Link
            key={city.id}
            href={`/request-movie?city=${city.name}`}
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
            replace
          >
            {city.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
