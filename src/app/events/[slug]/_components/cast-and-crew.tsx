import { CastAndCrewDesktop } from "./cast-and-crew-desktop";
import { CastAndCrewMobile } from "./cast-and-crew-mobile";

export function CastAndCrew() {
  return (
    <>
      <CastAndCrewMobile />
      <CastAndCrewDesktop />
    </>
  );
}
