"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { CityDialog } from "@/app/request-movie/_components/city-dialog";
import { LOCAL_STORAGE_CITY_ID } from "@/config/constants";
import { getCities } from "@/services/cities";

export function CityPicker() {
  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isCityPickerOpen, setIsCityPickerOpen] = useState<boolean>(false);

  const city = params.get("city");

  useEffect(() => {
    const cityId = localStorage.getItem(LOCAL_STORAGE_CITY_ID);

    if (!cityId) setIsCityPickerOpen(true);
  }, []);

  useEffect(() => {
    if (city) {
      // Find city id from city name
      getCities().then((res) => {
        const found = res.allCities.find((c) => c.name === city);
        if (found) {
          localStorage.setItem(LOCAL_STORAGE_CITY_ID, String(found.id));
          replace(pathname);
        }
      });
    }
  }, [city, pathname, replace]);

  return (
    <CityDialog open={isCityPickerOpen} onOpenChange={setIsCityPickerOpen} />
  );
}
