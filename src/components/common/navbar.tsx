"use client";

import { ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { useNavigation } from "@/provider/navigation-provider";
import { usePreferences } from "@/provider/preferences-provider";

import { LogoIcon } from "../icons";
import { Button } from "../ui/button";

import { CityPickerDialog } from "./city-picker-dialog";
import MenuButton from "./menu-button";

export function Navbar() {
  return (
    <div className="container">
      <div className="relative flex items-center justify-between py-3">
        <Link href="/" className="rounded-full focus:outline-none focus:ring-0">
          <LogoIcon className="size-12" />
        </Link>

        <nav className="hidden items-center justify-center md:absolute md:left-1/2 md:flex md:flex-1 md:-translate-x-1/2">
          <ul className="flex items-center justify-center gap-16">
            <NavLink label="Home" href="/" />
            <NavLink label="Events" href="/events" />
            <NavLink label="About" href="/about-us" />
            <NavLink label="Contact" href="/contact-us" />
          </ul>
        </nav>

        <div className="hidden md:flex md:items-center md:gap-3">
          <CityPickerButton />

          <Button size="sm" asChild>
            <Link href="/request-movie">Request Movie</Link>
          </Button>
        </div>

        <MenuButton />
      </div>
    </div>
  );
}

function CityPickerButton() {
  const { preferences, setPreferences } = usePreferences();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        size="sm"
        variant="ghost"
        className="gap-2 px-2 text-text"
        onClick={() => setOpen(true)}
      >
        <Globe className="size-5" />
        {preferences.city !== null ? preferences.city.name : "Pick City"}
        <ChevronDown className="size-4" />
      </Button>

      <CityPickerDialog
        open={open}
        onOpenChange={setOpen}
        onSelectCity={(city) => setPreferences({ ...preferences, city })}
      />
    </>
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
