"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { useNavigation } from "@/provider/navigation-provider";

export interface NavLinkProps {
  href: string;
  label: string;
}
export function NavLink({ href, label }: NavLinkProps) {
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
