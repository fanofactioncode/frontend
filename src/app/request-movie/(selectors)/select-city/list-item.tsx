"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { usePreferences } from "@/provider/preferences-provider";
import { City } from "@/types/cities";

export function ListItem({ city }: { city: City }) {
  const searchParams = useSearchParams();
  const { preferences, setPreferences } = usePreferences();
  const { back, replace } = useRouter();

  function handleSelect() {
    setPreferences({ ...preferences, city });

    const path = searchParams.get("path");

    if (path) replace(path);
    else back();
  }

  return (
    <button
      onClick={handleSelect}
      className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-left text-sm text-text-sub"
    >
      <span>{city.name}</span>
    </button>
  );
}
