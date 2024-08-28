import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import {
  FacebookIcon,
  InstagramIcon,
  LogoIcon,
  YoutubeIcon,
} from "@/components/icons";

const ThemeButton = dynamic(() => import("./theme-button"), { ssr: false });

export default function Footer() {
  return (
    <footer className="bg-footer py-16 text-white">
      <div className="container sm:px-14">
        <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
          <div className="space-y-4 sm:w-96">
            <LogoIcon className="size-14" />
            <p className="text-sm">
              We breathe new life into classic action movies, delivering the
              nostalgia you love. Experience the magic of yesteryears on the big
              screen with our meticulously restored releases. FanOfAction: Where
              vintage cinema roars back to life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start gap-10 sm:gap-14">
            <div className="space-y-5">
              <h5>Feature</h5>
              <ul className="flex flex-col gap-[0.9rem] text-[#ABB7C4] text-sm">
                <li>
                  <Link
                    href="/events"
                    className="hover:underline focus-within:underline focus-within:outline-none transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:underline focus-within:underline focus-within:outline-none transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:underline focus-within:underline focus-within:outline-none transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/request-movie"
                    className="hover:underline focus-within:underline focus-within:outline-none transition-colors"
                  >
                    Request a movie
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h5>Company</h5>
              <ul className="flex flex-col gap-[0.9rem] text-[#ABB7C4] text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:underline focus-within:underline focus-within:outline-none transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookies"
                    className="hover:underline focus-within:underline focus-within:outline-none transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:underline focus-within:underline focus-within:outline-none transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-and-cancellation-policy"
                    className="hover:underline focus-within:underline focus-within:outline-none transition-colors"
                  >
                    Refund & Cancellation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-5">
              <h5>Contacts</h5>
              <ul className="flex flex-col gap-[0.9rem] text-[#ABB7C4] text-sm">
                <li>
                  <Link
                    href="tel:+91 909090 909090"
                    className="hover:underline focus-within:underline focus-within:outline-none transition-colors"
                  >
                    +91 909090 909090
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:fanofaction@gmail.com"
                    className="hover:underline focus-within:underline focus-within:outline-none transition-colors"
                  >
                    fanofaction@gmail.com
                  </Link>
                </li>
                <li>20-26 New Jagnath, Rajkot, Gujarat - 360001</li>
              </ul>

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
            </div>
          </div>
        </div>
        <div className="space-y-5 sm:space-y-0 mt-10 sm:mt-20 sm:flex sm:justify-between sm:items-center">
          <div className="sm:order-2">
            <ThemeButton />
          </div>
          <p className="text-xs sm:text-sm text-[#ABB7C4]">
            All copyright reserved by @FanOfAction
          </p>
        </div>
      </div>
    </footer>
  );
}
