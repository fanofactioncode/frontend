import Link from "next/link";

import { TrendingIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

import SearchInput from "../_components/search-input";

export default function SelectMoviePage() {
  return (
    <div className="flex h-screen flex-col">
      <div className="container sticky top-0 bg-background py-3">
        <SearchInput placeholder="Search for a movie" />
      </div>

      <div className="mt-2 flex-1 space-y-2">
        <h2 className="px-4 text-sm font-semibold text-text">
          We received this suggestions
        </h2>

        <div className="">
          <Link
            href="/request-movie?movie=Andaj Apna Apna"
            className="flex w-full items-center justify-between border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            <span>Andaj Apna Apna</span>

            <div className="flex items-center gap-1">
              <span>22k</span>
              <TrendingIcon size={20} className="fill-primary" />
            </div>
          </Link>

          <Link
            href="/request-movie?movie=3 Idiots"
            className="flex w-full items-center justify-between border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            <span>3 Idiots</span>

            <div className="flex items-center gap-1">
              <span>22k</span>
              <TrendingIcon size={20} className="fill-primary" />
            </div>
          </Link>

          <Link
            href="/request-movie?movie=Terminator 2 : Judgement Day"
            className="flex w-full items-center justify-between border-b-[0.5px] border-secondary px-4 py-3 text-sm text-text-sub"
          >
            <span>Terminator 2 : Judgement Day</span>

            <div className="flex items-center gap-1">
              <span>22k</span>
              <TrendingIcon size={20} className="fill-primary" />
            </div>
          </Link>
        </div>
      </div>

      <div className="sticky bottom-0 bg-background p-4">
        <Button className="w-full">Submit</Button>
      </div>
    </div>
  );
}
