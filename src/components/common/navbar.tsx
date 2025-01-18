"use client";

import { ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { CityDialog } from "@/app/request-movie/_components/city-dialog";
import { LOCAL_STORAGE_CITY_ID } from "@/config/constants";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/provider/navigation-provider";
import { getCities } from "@/services/cities";

import { LogoIcon } from "../icons";
import { Button } from "../ui/button";

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
  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [cityName, setCityName] = useState<string>("");

  const city = params.get("city");

  useEffect(() => {
    const cityId = localStorage.getItem(LOCAL_STORAGE_CITY_ID);
    getCities().then((res) => {
      const found = res.allCities.find((c) => c.id === Number(cityId));
      if (found) {
        setCityName(found.name);
      }
    });
  }, []);

  useEffect(() => {
    if (city) {
      // Find city id from city name
      getCities().then((res) => {
        const found = res.allCities.find((c) => c.name === city);
        if (found) {
          setCityName(found.name);
          localStorage.setItem(LOCAL_STORAGE_CITY_ID, String(found.id));
          replace(pathname);
        }
      });
    }
  }, [city, pathname, replace]);

  return (
    <>
      <Button
        size="sm"
        variant="ghost"
        className="gap-2 px-2 text-text"
        onClick={() => setOpen(true)}
      >
        <Globe className="size-5" />
        {cityName || "Pick City"}
        <ChevronDown className="size-4" />
      </Button>

      <CityDialog open={open} onOpenChange={setOpen} />
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
