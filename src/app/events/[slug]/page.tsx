import React from "react";

import { FeatureMovies } from "./_components/feature-movies";
import { CastAndCrew } from "./_components/cast-and-crew";
import { MovieSysnopsis } from "./_components/movie-synopsis";
import { WaitlistOrBookingButton } from "./_components/waitlist-or-booking-button";

export default function EventDetailsPage() {
  return (
    <>
      <main>
        <MovieSysnopsis />
        <CastAndCrew />
        <WaitlistOrBookingButton />
      </main>
      <FeatureMovies />
    </>
  );
}
