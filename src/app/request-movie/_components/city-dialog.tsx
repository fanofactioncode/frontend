import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Case, Switch } from "@/components/ui/switch";
import { getCities } from "@/services/cities";
import { City } from "@/types/cities";

import SearchInput from "../(selectors)/_components/search-input";

export function CityDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [query, setQuery] = useState<string>();
  const [availableCities, setAvailableCities] = useState<City[]>([]);
  const [allCities, setAllCities] = useState<City[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    setIsFetching(true);
    getCities()
      .then((res) => {
        setAvailableCities(res.availableCities);
        setAllCities(res.allCities);
      })
      .finally(() => setIsFetching(false));
  }, []);

  const cities = allCities?.filter((city) => {
    if (!query) return true;
    return city.name.toLowerCase().includes(query.toLowerCase());
  });

  const handleCitySelect = (city: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("city", city);
    replace(`${pathname}?${params.toString()}`);

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pick your city</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <h2 className="text-lg font-semibold text-text">
            Currently available on these cities
          </h2>

          <div className="grid grid-cols-5 gap-3">
            <Switch value={isFetching}>
              <Case value={true}>
                {Array.from({ length: 5 }).map((city, index) => (
                  <div
                    key={`city_${city}_${index}`}
                    className="flex items-center justify-center truncate rounded-xl border border-secondary bg-secondary/30 p-2 text-center text-text-sub dark:bg-secondary"
                  >
                    <span className="h-4 w-full animate-pulse rounded-sm bg-text/10" />
                  </div>
                ))}
              </Case>
              <Case value={false}>
                {availableCities?.map((city) => (
                  <button
                    key={city.id}
                    className="flex items-center justify-center truncate rounded-xl border border-secondary bg-secondary/30 p-2 text-center text-text-sub dark:bg-secondary"
                    onClick={() => handleCitySelect(city.name)}
                    aria-label={city.name}
                    aria-details="Currently available on these cities"
                  >
                    {city.name}
                  </button>
                ))}
              </Case>
            </Switch>
          </div>
        </div>

        <SearchInput
          placeholder="Search your city"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="py-4">
          <h2 className="text-lg font-semibold text-text">
            In which city you want us to reach ?
          </h2>

          <ScrollArea className="h-[200px] overflow-y-auto">
            <div className="mt-3 grid grid-cols-4 gap-2">
              <Switch value={isFetching}>
                <Case value={true}>
                  {Array.from({ length: 12 }).map((movie, index) => (
                    <div
                      key={`movie_${movie}_${index}`}
                      className="h-5 w-5/6 animate-pulse rounded-sm bg-text/10"
                    />
                  ))}
                </Case>
                <Case value={false}>
                  {cities?.map((city) => (
                    <button
                      key={city.id}
                      className="block h-auto text-left text-text-sub focus-within:underline focus-within:outline-none"
                      onClick={() => handleCitySelect(city.name)}
                      aria-label={city.name}
                    >
                      {city.name}
                    </button>
                  ))}
                </Case>
              </Switch>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
