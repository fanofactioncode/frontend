import React from "react";
import Link from "next/link";

import { LogoIcon } from "../icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-md">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          <Link
            href="/"
            className="rounded-full focus:outline-none focus:ring-0"
          >
            <LogoIcon className="size-12" />
          </Link>

          <div className="flex flex-col gap-1 rounded-full border-[1px] border-secondary px-2 py-3.5 dark:border-primary">
            <span className="inline-block h-[2px] w-5 rounded-full bg-primary"></span>
            <span className="inline-block h-[2px] w-5 rounded-full bg-primary"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
