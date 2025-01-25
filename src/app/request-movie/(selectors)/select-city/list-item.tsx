"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { revalidatePathAction } from "@/actions/revalidate";
import { usePreferences } from "@/provider/preferences-provider";
import { City } from "@/types/cities";

export function ListItem({ city }: { city: City }) {
  const searchParams = useSearchParams();
  const { preferences, setPreferences } = usePreferences();
  const { back, replace } = useRouter();

  const path = searchParams.get("path");

  function handleSelect() {
    setPreferences({ ...preferences, city });

    if (path) {
      revalidatePathAction(path).then(() => {
        replace(path);
      });
    } else back();
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
