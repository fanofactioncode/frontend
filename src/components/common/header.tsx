import Link from "next/link";
import { Suspense } from "react";

import { LogoIcon } from "../icons";
import { Button } from "../ui/button";

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

            <nav className="hidden items-center justify-center md:flex md:flex-1">
              <ul className="flex items-center justify-center gap-16">
                <li>
                  <Link
                    href="/"
                    className="font-medium text-text hover:text-text-sub"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="font-medium text-text hover:text-text-sub"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="font-medium text-text hover:text-text-sub"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="font-medium text-text hover:text-text-sub"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <Button size="sm" className="hidden text-base md:flex">
              Request Movie
            </Button>

            <Suspense fallback={null}>
              <MenuButton />
            </Suspense>
          </div>
        </div>
      </header>

      <MobileNavigation />
    </>
  );
}
