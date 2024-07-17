import Link from "next/link";

import { Button } from "@/components/ui/button";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Newsletter from "@/components/common/newsletter";
import SectionBadge from "@/components/ui/section-badge";
import MovieListItem from "@/components/common/movie-list-item";
import { PlayIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <Header />

      <section className="container py-24 relative">
        <h1 className="text-3xl transition-all duration-300 text-start sm:text-center sm:text-6xl font-bold w-full sm:w-8/12 mx-auto sm:leading-tight">
          Epic{" "}
          <span className="text-primary bg-green px-2 rounded-xl">
            Cinematic
          </span>{" "}
          Revival: The Return of a Blockbuster - Movie Rerelease Spectacular!
        </h1>
        <p className="transition-all duration-300 text-start text-text sm:text-center w-full sm:w-6/12 mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur. Viverra euismod duis aliquam
          ipsum. Ac senectus turpis sed sagittis nulla feugiat vulputate. Massa
          vulputate donec ligula elit ut. Viverra eros ut morbi auctor odio
          enim.
        </p>

        <div className="relative cursor-pointer bg-[url('/video-thumbnail.jpg')] bg-cover bg-center bg-no-repeat border-8 border-secondary group flex mt-32 items-center justify-center bg-primary/70 w-[50vw] h-[60vh] left-2/4 -translate-x-1/2 rounded-3xl">
          <svg
            width="66"
            height="37"
            viewBox="0 0 66 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-12 -right-9"
          >
            <path
              d="M4.16489 34.777L10.3715 19.3261L27.2649 26.6138L29.2286 12.6623L45.1793 20.2831L48.5572 5.83185L63.565 13.7859"
              stroke="#FF499E"
              strokeWidth="7"
            />
          </svg>

          <svg
            width="52"
            height="49"
            viewBox="0 0 52 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-5 -left-20"
          >
            <path
              d="M51.9724 0.959063L31.6694 48.7899L0.398212 7.29158L51.9724 0.959063Z"
              fill="#E9EB87"
            />
          </svg>

          <PlayIcon
            size={68}
            color="#ABB7C4"
            className="transition group-hover:scale-105"
          />
        </div>
      </section>

      <section className="container py-24">
        <div className="flex justify-between items-end">
          <div className="space-y-5">
            <SectionBadge>
              Want to know what we are planning for next ?
            </SectionBadge>
            <h2 className="text-5xl font-bold">Upcoming Shows</h2>
          </div>

          <Button variant="ghost" className="text-pink hover:text-pink">
            View All
          </Button>
        </div>

        <div className="flex mt-5 justify-between">
          <MovieListItem
            title="Godzila vs Kong: The New Empire"
            thumbnail="/godzila-x-kong.webp"
          />

          <MovieListItem
            title="Godzila vs Kong: The New Empire"
            thumbnail="/godzila-x-kong.webp"
          />

          <MovieListItem
            title="Godzila vs Kong: The New Empire"
            thumbnail="/godzila-x-kong.webp"
          />

          <MovieListItem
            title="Godzila vs Kong: The New Empire"
            thumbnail="/godzila-x-kong.webp"
          />
        </div>
      </section>

      <section className="container py-24">
        <div className="flex">
          <div className="w-1/2 space-y-5">
            <SectionBadge>Share your favorite</SectionBadge>
            <h2 className="text-5xl font-bold">Ready to suggest a movie !</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              ut pariatur adipisci est rerum officiis recusandae obcaecati optio
              explicabo repellat? Quam nihil ullam libero iste! Nesciunt sequi
              aut minus doloribus, sunt enim consequatur totam, dolorem commodi
              possimus cupiditate error quis.
            </p>
          </div>

          <div className="w-1/2 flex items-center justify-end">
            <Button variant="outline" asChild>
              <Link href="/request-movie">Request a movie</Link>
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}
