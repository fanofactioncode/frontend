import React from "react";
import Link from "next/link";

import { LogoIcon } from "../icons";

import MenuButton from "./menu-button";
import MobileNavigation from "./mobile-navigation";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background/50 backdrop-blur-md">
        <div className="container">
          <div className="flex items-center justify-between py-3">
            <Link
              href="/"
              className="rounded-full focus:outline-none focus:ring-0"
            >
              <LogoIcon className="size-12" />
            </Link>

            <MenuButton />
          </div>
        </div>
      </header>

      <MobileNavigation />
    </>
  );
}
