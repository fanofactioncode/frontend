import React from "react";

import { UpcomingShowsDesktop } from "./upcoming-shows-desktop";
import { UpcomingShowsMobile } from "./upcoming-shows-mobile";

export function UpcomingShows() {
  return (
    <>
      <UpcomingShowsDesktop />
      <UpcomingShowsMobile />
    </>
  );
}
