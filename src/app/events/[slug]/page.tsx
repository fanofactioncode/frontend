import { Metadata } from "next";

import { getMovieDetails } from "@/services/movies";

import { CastAndCrew } from "./_components/cast-and-crew";
import { FeatureMovies } from "./_components/feature-movies";
import { MovieSysnopsis } from "./_components/movie-synopsis";
import { WaitlistOrBookingButton } from "./_components/waitlist-or-booking-button";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const movie = await getMovieDetails(slug);

  return {
    title: `Book ticket for ${movie.title} | FanOfAction`,
    description: movie.overview,
    openGraph: {
      title: movie.title,
      description: movie.overview,
      images: [
        {
          url: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        },
      ],
    },
  };
}

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
