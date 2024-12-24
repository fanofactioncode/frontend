"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function AvailableListItem({ city }: { city: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function handleSelect() {
    const params = new URLSearchParams(searchParams);
    params.set("city", city);
    replace(`/request-movie?${params.toString()}`);
  }

  return (
    <button
      onClick={handleSelect}
      className="flex items-center justify-center truncate rounded-xl border border-secondary bg-secondary/30 p-2 text-center text-sm text-text-sub dark:bg-secondary"
    >
      {city}
    </button>
  );
}
