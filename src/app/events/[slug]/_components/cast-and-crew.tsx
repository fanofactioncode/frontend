import React from "react";

import { CastAndCrewMobile } from "./cast-and-crew-mobile";
import { CastAndCrewDesktop } from "./cast-and-crew-desktop";

export function CastAndCrew() {
  return (
    <>
      <CastAndCrewMobile />
      <CastAndCrewDesktop />
    </>
  );
}
