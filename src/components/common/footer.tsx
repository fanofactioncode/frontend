import dynamic from "next/dynamic";
import Link from "next/link";

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
        <div className="flex flex-col gap-10 sm:justify-between md:flex-row">
          <div className="space-y-4 md:w-96">
            <LogoIcon className="size-14" />
            <p className="text-sm">
              At FanOfAction, we bring the magic of cinema&apos;s greatest hits
              back to the big screen. Relive your favorite action-packed
              adventures, thrilling dramas, and timeless classics in theaters
              near you! Whether you’re a die-hard action fan or a nostalgic
              movie lover, we’ve got something for everyone.
            </p>
          </div>

          <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:gap-14">
            <div className="flex-1 space-y-5 md:flex-auto">
              <h5>Feature</h5>
              <ul className="flex flex-col gap-[0.9rem] text-sm text-[#ABB7C4]">
                <li>
                  <Link
                    href="/events"
                    className="transition-colors focus-within:underline focus-within:outline-none hover:underline"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="transition-colors focus-within:underline focus-within:outline-none hover:underline"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="transition-colors focus-within:underline focus-within:outline-none hover:underline"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/request-movie"
                    className="transition-colors focus-within:underline focus-within:outline-none hover:underline"
                  >
                    Request a movie
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 space-y-5 md:flex-auto">
              <h5>Company</h5>
              <ul className="flex flex-col gap-[0.9rem] text-sm text-[#ABB7C4]">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="transition-colors focus-within:underline focus-within:outline-none hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="transition-colors focus-within:underline focus-within:outline-none hover:underline"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-and-cancellation-policy"
                    className="transition-colors focus-within:underline focus-within:outline-none hover:underline"
                  >
                    Refund & Cancellation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex-1 space-y-5 md:flex-auto">
              <h5>Contacts</h5>
              <ul className="flex flex-col gap-[0.9rem] text-sm text-[#ABB7C4]">
                <li>
                  <Link
                    href="tel:+91 942 888 7271"
                    className="transition-colors focus-within:underline focus-within:outline-none hover:underline"
                  >
                    +91 942 888 7271
                  </Link>
                </li>
                <li>
                  <Link
                    href="mailto:info@fanofaction.com"
                    className="transition-colors focus-within:underline focus-within:outline-none hover:underline"
                  >
                    info@fanofaction.com
                  </Link>
                </li>
                <li>
                  <p className="transition-colors focus-within:underline focus-within:outline-none hover:underline">
                    Bizcon 10 Sardar Nagar, Astron Chowk <br /> Rajkot, Gujarat
                    360001
                  </p>
                </li>
              </ul>

              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/fanofaction"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <InstagramIcon className="size-6 fill-white" />
                </Link>

                <Link
                  href="https://www.facebook.com/WeAreFanOfAction/"
                  aria-label="Facebook"
                  target="_blank"
                >
                  <FacebookIcon className="size-6 fill-white" />
                </Link>

                <Link
                  href="https://www.youtube.com/@WeAreFanOfAction"
                  aria-label="Youtube"
                  target="_blank"
                >
                  <YoutubeIcon className="size-6 fill-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-5 sm:mt-20 sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <div className="sm:order-2">
            <ThemeButton />
          </div>
          <p className="text-xs text-[#ABB7C4] sm:text-sm">
            All copyright reserved by @FanOfAction
          </p>
        </div>
      </div>
    </footer>
  );
}
