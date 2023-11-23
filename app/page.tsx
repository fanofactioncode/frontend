import Link from "next/link";

import LogoIcon from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <header className="border-b">
        <div className="container">
          <div className="flex items-center justify-between py-3">
            <LogoIcon height={56} width={56} />

            <nav>
              <ul className="flex items-center gap-8">
                <li className="font-medium text-sm hover:text-slate-950">
                  <Link href="/">Home</Link>
                </li>
                <li className="font-medium text-sm hover:text-slate-950">
                  <Link href="/">About</Link>
                </li>
                <li className="font-medium text-sm hover:text-slate-950">
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </nav>

            <Button size="sm">Login</Button>
          </div>
        </div>
      </header>

      <section className="container py-24 relative">
        <h1 className="text-3xl transition-all duration-300 text-start sm:text-center sm:text-6xl font-bold w-full sm:w-8/12 mx-auto sm:leading-normal">
          Epic Cinematic Revival: The Return of a Blockbuster - Movie Rerelease
          Spectacular!
        </h1>
        <p className="text-sm transition-all duration-300 text-start sm:text-center w-full sm:w-6/12 mx-auto mt-4">
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
        <div className="absolute flex items-center justify-center left-1/2 top-[96%] -translate-x-1/2 w-[90%] sm:w-7/12 bg-gray-600 h-1/3 sm:h-2/3 rounded-3xl">
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
      </section>

      <section className="container py-60"></section>
    </>
  );
}
