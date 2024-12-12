"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import SearchInput from "../_components/search-input";

export function Searchbox() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

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
    <div className="container sticky top-0 bg-background py-3">
      <SearchInput
        placeholder="Search your city"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("q")?.toString()}
      />
    </div>
  );
}
