import React from "react";
import Link from "next/link";
import { Globe } from "lucide-react";

import { Button } from "../ui/button";
import { LogoIcon } from "../icons";

export default function Header() {
  return (
    <header className="border-b sm:border-b-transparent sticky top-0 backdrop-blur-md bg-white/40 z-50">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          <Link
            href="/"
            className="rounded-full focus:outline-none focus:ring-0"
          >
            <LogoIcon size={48} />
          </Link>

          <nav>
            <ul className="flex items-center gap-14">
              <li className="font-medium hover:text-slate-950">
                <Link href="/">Home</Link>
              </li>
              <li className="font-medium hover:text-slate-950">
                <Link href="/">Events</Link>
              </li>
              <li className="font-medium hover:text-slate-950">
                <Link href="/">About</Link>
              </li>
              <li className="font-medium hover:text-slate-950">
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </nav>

          <Button variant="ghost" size="sm" className="gap-2">
            <Globe size={20} />
            Rajkot
          </Button>
        </div>
      </div>
    </header>
  );
}
