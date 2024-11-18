import { CastAndCrew } from "./_components/cast-and-crew";
import { FeatureMovies } from "./_components/feature-movies";
import { MovieSysnopsis } from "./_components/movie-synopsis";
import { WaitlistOrBookingButton } from "./_components/waitlist-or-booking-button";

type Props = {
  params: {
    slug: string;
  };
};

export default function EventDetailsPage({ params: { slug } }: Props) {
  return (
    <>
      <main>
        <MovieSysnopsis id={slug} />
        <CastAndCrew />
        <WaitlistOrBookingButton />
      </main>
      <FeatureMovies />
    </>
  );
}
