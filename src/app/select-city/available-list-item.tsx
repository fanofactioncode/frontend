"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { setPreferences } from "@/actions/preferences";
import { usePreferences } from "@/provider/preferences-provider";
import { City } from "@/types/cities";

export function AvailableListItem({ city }: { city: City }) {
  const [isPending, setIsPending] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const { replace, back } = useRouter();
  const { preferences } = usePreferences();

  const path = searchParams.get("path");

  async function handleSelect() {
    setIsPending(true);
    await setPreferences({ ...preferences, city });

    setIsPending(false);
    if (path) replace(path);
    else back();
  }

  return (
    <button
      onClick={handleSelect}
      disabled={isPending}
      className="flex items-center justify-center truncate rounded-xl border border-secondary bg-secondary/30 p-2 text-center text-sm text-text-sub dark:bg-secondary"
    >
      {city.name}

      {isPending && (
        <div className="h-6 w-6 animate-spin rounded-full border-4 border-r-primary" />
      )}
    </button>
  );
}
