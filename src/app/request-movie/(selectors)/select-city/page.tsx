import Link from "next/link";

import SearchInput from "../_components/search-input";

export default function SelectCityPage() {
  return (
    <>
      <div className="container space-y-6 py-4">
        <h2 className="text-base font-semibold text-text">
          Currently available on these cities
        </h2>

        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2 dark:bg-secondary">
            <p className="truncate text-center text-sm text-text-sub">Rajkot</p>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2 dark:bg-secondary">
            <p className="truncate text-center text-sm text-text-sub">Morbi</p>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2 dark:bg-secondary">
            <p className="truncate text-center text-sm text-text-sub">
              Ahmedabad
            </p>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2 dark:bg-secondary">
            <p className="truncate text-center text-sm text-text-sub">
              Bhubaneshwar
            </p>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2 dark:bg-secondary">
            <p className="truncate text-center text-sm text-text-sub">Mumbai</p>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-secondary bg-secondary/30 p-2 dark:bg-secondary">
            <p className="truncate text-center text-sm text-text-sub">Delhi</p>
          </div>
        </div>
      </div>

      <div className="container sticky top-0 bg-background py-3">
        <SearchInput placeholder="Search your city" />
      </div>

      <div className="py-4">
        <h2 className="px-4 text-base font-semibold text-text">
          In which city you want us to reach ?
        </h2>

        <div className="mt-3">
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
          <Link
            href="http://google.com"
            className="block w-full border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            Lorem, ipsum.
          </Link>
        </div>
      </div>
    </>
  );
}
