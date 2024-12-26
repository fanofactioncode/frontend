"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { useNavigation } from "@/provider/navigation-provider";

import { LogoIcon } from "../icons";
import { Button } from "../ui/button";

import MenuButton from "./menu-button";

export function Navbar() {
  return (
    <div className="container">
      <div className="flex items-center justify-between py-3">
        <Link href="/" className="rounded-full focus:outline-none focus:ring-0">
          <LogoIcon className="size-12" />
        </Link>

        <nav className="hidden items-center justify-center md:flex md:flex-1">
          <ul className="flex items-center justify-center gap-16">
            <NavLink label="Home" href="/" />
            <NavLink label="Events" href="/events" />
            <NavLink label="About" href="/about-us" />
            <NavLink label="Contact" href="/contact-us" />
          </ul>
        </nav>

        <Button size="sm" className="hidden text-base md:flex" asChild>
          <Link href="/request-movie">Request Your Movie</Link>
        </Button>

        <MenuButton />
      </div>
    </div>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
}
function NavLink({ href, label }: NavLinkProps) {
  const { segment } = useNavigation();
  const isActive = href.replace("/", "") === (segment ?? "");

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "font-medium text-text-sub transition-colors duration-150 focus-within:underline focus-within:outline-none hover:text-text dark:text-slate-500 dark:hover:text-white",
          isActive && "font-bold text-text dark:text-white"
        )}
      >
        {label}
      </Link>
    </li>
  );
}
