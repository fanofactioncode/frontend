"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { usePreferences } from "@/provider/preferences-provider";
import { City } from "@/types/cities";

export function AvailableListItem({ city }: { city: City }) {
  const searchParams = useSearchParams();
  const { replace, back } = useRouter();
  const { preferences, setPreferences } = usePreferences();

  function handleSelect() {
    setPreferences({ ...preferences, city });

    const path = searchParams.get("path");

    if (path) replace(path);
    else back();
  }

  return (
    <button
      onClick={handleSelect}
      className="flex items-center justify-center truncate rounded-xl border border-secondary bg-secondary/30 p-2 text-center text-sm text-text-sub dark:bg-secondary"
    >
      {city.name}
    </button>
  );
}
