"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import SearchInput from "../_components/search-input";

export function Searchbox() {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <SearchInput
      type="search"
      defaultValue={searchParams.get("q") ?? ""}
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search movies"
      className="w-full"
    />
  );
}
