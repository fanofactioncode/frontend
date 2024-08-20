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
    <footer className="bg-primary-background py-16 text-white">
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
              <ul className="flex flex-col gap-[0.9rem] text-secondary text-sm">
                <li>
                  <Link href="/events">Events</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/request-movie">Request a movie</Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h5>Company</h5>
              <ul className="flex flex-col gap-[0.9rem] text-secondary text-sm">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/cookies">Cookies</Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/refund-and-cancellation">
                    Refund & Cancellation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h5>Contacts</h5>
              <ul className="flex flex-col gap-[0.9rem] text-secondary text-sm">
                <li>
                  <Link href="tel:+91 909090 909090">+91 909090 909090</Link>
                </li>
                <li>
                  <Link href="mailto:fanofaction@gmail.com">
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
                  className="p-1 rounded-full border"
                >
                  <DesktopIcon className="size-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-1 rounded-full"
                >
                  <SunIcon className="size-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-1 rounded-full"
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
