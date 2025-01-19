import { City } from "@/types/cities";

import { AvailableListItem } from "./available-list-item";

export function AvailableCities({ cities }: { cities: City[] }) {
  return (
    <div className="container space-y-6 py-4">
      <h2 className="text-base font-semibold text-text">
        Currently available on these cities
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {cities.map((city) => (
          <AvailableListItem key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}
