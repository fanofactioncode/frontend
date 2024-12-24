"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function ListItem({ city }: { city: string }) {
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
      className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-left text-sm text-text-sub"
    >
      <span>{city}</span>
    </button>
  );
}
