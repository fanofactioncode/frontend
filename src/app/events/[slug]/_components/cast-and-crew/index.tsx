import { getShowDetails } from "@/services/shows";

import { CastAndCrewDesktop } from "./cast-and-crew-desktop";
import { CastAndCrewMobile } from "./cast-and-crew-mobile";

export async function CastAndCrew({ id }: { id: string }) {
  const { movie } = await getShowDetails(id);
  const artists = movie.artists;

  if (artists.length === 0) return false;

  return (
    <>
      <CastAndCrewMobile artists={artists} />
      <CastAndCrewDesktop artists={artists} />
    </>
  );
}
