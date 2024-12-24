import { City } from "@/types/cities";

import { ListItem } from "./list-item";

export function AllCities({ cities }: { cities: City[] }) {
  return (
    <div className="py-4">
      <h2 className="px-4 text-base font-semibold text-text">
        In which city you want us to reach ?
      </h2>

      <div className="mt-3">
        {cities.map((city) => (
          <ListItem key={city.id} city={city.name} />
        ))}
      </div>
    </div>
  );
}
