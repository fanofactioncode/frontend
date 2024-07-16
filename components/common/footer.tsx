import React from "react";
import Link from "next/link";

import { LogoIcon } from "@/components/icons";
import SectionBadge from "@/components/ui/section-badge";

export default function Footer() {
  return (
    <footer className="bg-primary-background pt-24 pb-16 text-white">
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="sm:w-1/2 space-y-7">
            <LogoIcon size={76} />

            <p className="sm:w-3/4">
              We breathe new life into classic action movies, delivering the
              nostalgia you love. Experience the magic of yesteryears on the big
              screen with our meticulously restored releases. FanOfAction: Where
              vintage cinema roars back to life.
            </p>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-10">
              <div className="space-y-4">
                <h5 className="text-lg">Feature</h5>
                <ul className="flex flex-col gap-3 text-secondary">
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
              <div className="space-y-4">
                <h5 className="text-lg">Company</h5>
                <ul className="flex flex-col gap-3 text-secondary">
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
              <div className="space-y-4">
                <h5 className="text-lg">Contacts</h5>
                <ul className="flex flex-col gap-3 text-secondary">
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
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-36">
          <SectionBadge>
            © {new Date().getFullYear()} FanOfAction. All rights reserved.
          </SectionBadge>
        </div>
      </div>
    </footer>
  );
}
