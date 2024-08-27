import React from "react";
import Link from "next/link";

import {
  DesktopIcon,
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  MoonIcon,
  SunIcon,
  YoutubeIcon,
} from "@/components/icons";

import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#070F18] py-16 text-white">
      <div className="container">
        <div className="flex flex-col gap-10">
          <div className="space-y-4">
            <LogoIcon className="size-14" />
            <p className="text-sm">
              We breathe new life into classic action movies, delivering the
              nostalgia you love. Experience the magic of yesteryears on the big
              screen with our meticulously restored releases. FanOfAction: Where
              vintage cinema roars back to life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start gap-10">
            <div className="space-y-5">
              <h5>Feature</h5>
              <ul className="flex flex-col gap-[0.9rem] text-[#ABB7C4] text-sm">
                <li>
                  <Link href="/events" className="hover:underline focus-within:underline focus-within:outline-none transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline focus-within:underline focus-within:outline-none transition-colors">About</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline focus-within:underline focus-within:outline-none transition-colors">Contact</Link>
                </li>
                <li>
                  <Link href="/request-movie" className="hover:underline focus-within:underline focus-within:outline-none transition-colors">Request a movie</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h5>Company</h5>
              <ul className="flex flex-col gap-[0.9rem] text-[#ABB7C4] text-sm">
                <li>
                  <Link href="/privacy-policy" className="hover:underline focus-within:underline focus-within:outline-none transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:underline focus-within:underline focus-within:outline-none transition-colors">Cookies</Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:underline focus-within:underline focus-within:outline-none transition-colors">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/refund-and-cancellation" className="hover:underline focus-within:underline focus-within:outline-none transition-colors">
                    Refund & Cancellation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h5>Contacts</h5>
              <ul className="flex flex-col gap-[0.9rem] text-[#ABB7C4] text-sm">
                <li>
                  <Link href="tel:+91 909090 909090" className="hover:underline focus-within:underline focus-within:outline-none transition-colors">+91 909090 909090</Link>
                </li>
                <li>
                  <Link href="mailto:fanofaction@gmail.com" className="hover:underline focus-within:underline focus-within:outline-none transition-colors">
                    fanofaction@gmail.com
                  </Link>
                </li>
                <li>20-26 New Jagnath, Rajkot, Gujarat - 360001</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/fanofaction"
                aria-label="Instagram"
                target="_blank"
              >
                <InstagramIcon className="size-6" />
              </Link>

              <Link
                href="https://www.facebook.com/WeAreFanOfAction/"
                aria-label="Facebook"
                target="_blank"
              >
                <FacebookIcon className="size-6" />
              </Link>

              <Link
                href="https://www.youtube.com/@WeAreFanOfAction"
                aria-label="Youtube"
                target="_blank"
              >
                <YoutubeIcon className="size-6" />
              </Link>
            </div>

            <div className="space-y-5">
              <div className="rounded-full border flex grow-0 w-fit">
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-1 rounded-full border hover:bg-transparent hover:text-white"
                >
                  <DesktopIcon className="size-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-1 rounded-full hover:bg-transparent hover:text-white"
                >
                  <SunIcon className="size-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-1 rounded-full hover:bg-transparent hover:text-white"
                >
                  <MoonIcon className="size-5" />
                </Button>
              </div>
              <p className="text-xs text-[#ABB7C4]">
                All copyright reserved by @FanOfAction
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
