import React from "react";
import Link from "next/link";

import SearchInput from "../_components/search-input";

export default function SelectCityPage() {
  return (
    <>
      <div className="container space-y-6 py-4">
        <h2 className="text-base font-semibold">
          Currently available on these cities
        </h2>

        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2">
            <p className="truncate text-center text-sm">Rajkot</p>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2">
            <p className="truncate text-center text-sm">Morbi</p>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2">
            <p className="truncate text-center text-sm">Ahmedabad</p>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2">
            <p className="truncate text-center text-sm">Bhubaneshwar</p>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2">
            <p className="truncate text-center text-sm">Mumbai</p>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2">
            <p className="truncate text-center text-sm">Delhi</p>
          </div>
        </div>
      </div>

      <div className="container sticky top-0 bg-background py-3">
        <SearchInput placeholder="Search your city" />
      </div>

      <div className="py-4">
        <h2 className="px-4 text-base font-semibold">
          In which city you want us to reach ?
        </h2>

        <div className="mt-3">
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm"
          >
            Lorem, ipsum.
          </Link>
        </div>
      </div>
    </>
  );
}
