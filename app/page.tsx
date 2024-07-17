import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Newsletter from "@/components/common/newsletter";
import SectionBadge from "@/components/ui/section-badge";

export default function Home() {
  return (
    <>
      <Header />

      <section className="container py-24 relative">
        <h1 className="text-3xl transition-all duration-300 text-start sm:text-center sm:text-6xl font-bold w-full sm:w-8/12 mx-auto sm:leading-tight">
          Epic Cinematic Revival: The Return of a Blockbuster - Movie Rerelease
          Spectacular!
        </h1>
        <p className="transition-all duration-300 text-start sm:text-center w-full sm:w-6/12 mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur. Viverra euismod duis aliquam
          ipsum. Ac senectus turpis sed sagittis nulla feugiat vulputate. Massa
          vulputate donec ligula elit ut. Viverra eros ut morbi auctor odio
          enim.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-16 w-full sm:w-6/12 mx-auto items-center">
          <Input className="h-14 rounded-xl" placeholder="Join with us" />
          <Button size="lg" className="font-semibold w-full sm:w-auto">
            Newsletter
          </Button>
        </div>

        {/* Video Container */}
        <div className="relative flex mt-32 items-center justify-center bg-primary/70 w-[50vw] h-[50vh] left-2/4 -translate-x-1/2  rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="none"
            className="cursor-pointer h-14 w-14 sm:h-24 sm:w-24 transition-all duration-500 hover:scale-105"
          >
            <rect
              x="5"
              y="5"
              width="90"
              height="90"
              rx="45"
              stroke="white"
              strokeWidth="10"
            />
            <path d="M66 50L42 63.8564L42 36.1436L66 50Z" fill="white" />
          </svg>
        </div>
        {/* <Canvas /> */}
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

        <div className="flex mt-5 gap-7">
          <div className="w-3/12">
            <div className="border border-secondary rounded-xl p-1">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/godzila-x-kong.webp"
                  alt="movie"
                  className="rounded-md object-cover"
                  fill
                />
              </div>

              <h4 className="text-center truncate py-3 px-4 text-black font-semibold">
                Godzila vs Kong: The New Empire
              </h4>
            </div>
          </div>
          <div className="w-3/12">
            <div className="border border-secondary rounded-xl p-1">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/godzila-x-kong.webp"
                  alt="movie"
                  className="rounded-md object-cover"
                  fill
                />
              </div>

              <h4 className="text-center truncate py-3 px-4 text-black font-semibold">
                Godzila vs Kong: The New Empire
              </h4>
            </div>
          </div>
          <div className="w-3/12">
            <div className="border border-secondary rounded-xl p-1">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/godzila-x-kong.webp"
                  alt="movie"
                  className="rounded-md object-cover"
                  fill
                />
              </div>

              <h4 className="text-center truncate py-3 px-4 text-black font-semibold">
                Godzila vs Kong: The New Empire
              </h4>
            </div>
          </div>
          <div className="w-3/12">
            <div className="border border-secondary rounded-xl p-1">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/godzila-x-kong.webp"
                  alt="movie"
                  className="rounded-md object-cover"
                  fill
                />
              </div>

              <h4 className="text-center truncate py-3 px-4 text-black font-semibold">
                Godzila vs Kong: The New Empire
              </h4>
            </div>
          </div>
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
