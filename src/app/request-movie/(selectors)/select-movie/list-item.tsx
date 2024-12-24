"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function ListItem({ title }: { title: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  function handleSelect() {
    const params = new URLSearchParams(searchParams);
    params.set("movie", title);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <button
      onClick={handleSelect}
      className="flex w-full items-center justify-between border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
    >
      <span>{title}</span>
    </button>
  );
}
