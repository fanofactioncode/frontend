import React from "react";

import Badge from "../ui/badge";

import PreviousEventsCarousel from "./previous-events-carousel";

export default function PreviousEvents() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="space-y-3 md:w-1/2">
          <Badge>Previously on</Badge>
          <h2 className="text-4xl font-bold text-text sm:text-5xl">
            Here is some of our previous events, you may love
          </h2>
          <p className="text-sm text-text-sub sm:text-base">
            Here are some of our previously done events. If you missed you can
            book it inside your city. Hurray!
          </p>
        </div>
      </div>

      <PreviousEventsCarousel />
    </section>
  );
}
