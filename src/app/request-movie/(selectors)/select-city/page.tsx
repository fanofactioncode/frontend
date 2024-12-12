import { getCities } from "@/services/cities";

import { AllCities } from "./all-cities";
import { AvailableCities } from "./available-cities";
import { Searchbox } from "./searchbox";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SelectCityPage({ searchParams }: Props) {
  const q = (await searchParams).q;
  const { availableCities, allCities } = await getCities();

  const cities = allCities.filter((city) => {
    if (!q) return true;
    return city.name.toLowerCase().includes((q as string).toLowerCase());
  });

  return (
    <>
      <AvailableCities cities={availableCities} />
      <Searchbox />
      <AllCities cities={cities} />
    </>
  );
}
