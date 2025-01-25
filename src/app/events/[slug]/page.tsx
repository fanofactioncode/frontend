import { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { getShowDetails } from "@/services/shows";

import { CastAndCrew } from "./_components/cast-and-crew";
import { CityPicker } from "./_components/city-picker";
import { FeatureMovies } from "./_components/feature-movies";
import { MovieSysnopsis } from "./_components/movie-synopsis";
import { NotifyOrBookingButton } from "./_components/notify-or-booking-button";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const show = await getShowDetails(slug);

  // If there is no show with the given slug, return a 404 page
  if (!show) notFound();

  const movie = show.movie;

  return {
    title: `Book Tickets For ${movie.title}`,
    description: movie.description,
    openGraph: {
      title: `Book Ticket For ${movie.title} | FanOfAction`,
      description: movie.description,
      images: [
        {
          url: movie.cover_poster_url ?? "",
          host: "res.cloudinary.com",
          alt: `${movie.title}'s poster`,
        },
        {
          url: movie.poster_url ?? "",
          host: "res.cloudinary.com",
          alt: `${movie.title}'s poster`,
        },
      ],
    },
  };
}

export default async function EventDetailsPage({ params }: Props) {
  const storedCookies = await cookies();
  const willShowCityPicker = !storedCookies.has("city");

  const slug = (await params).slug;

  return (
    <>
      <main>
        <MovieSysnopsis id={slug} />
        <CastAndCrew id={slug} />
        <NotifyOrBookingButton />
      </main>
      <FeatureMovies slug={slug} />
      <CityPicker willDialogOpen={willShowCityPicker} />
    </>
  );
}
