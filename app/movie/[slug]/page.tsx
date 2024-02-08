import HeroSection from "./_components/hero-section";
import RatingSection from "./_components/rating-section";
import CastSection from "./_components/cast-section";

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function MoviePage({ params, searchParams }: Readonly<Props>) {
  return (
    <>
      <HeroSection />
      <RatingSection />
      <CastSection />
    </>
  );
}
