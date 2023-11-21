import LogoIcon from "@/components/icons/logo";
import { Button } from "@/components/ui/button";

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
                  Home
                </li>
                <li className="font-medium text-sm hover:text-slate-950">
                  Home
                </li>
                <li className="font-medium text-sm hover:text-slate-950">
                  Home
                </li>
              </ul>
            </nav>

            <Button size="sm">Login</Button>
          </div>
        </div>
      </header>

      <section className="container mt-16">
        <h1 className="text-center text-5xl font-bold w-8/12 mx-auto">
          Epic Cinematic Revival: The Return of a Blockbuster - Movie Rerelease
          Spectacular!
        </h1>
        <p className="text-sm text-center w-8/12 mx-auto mt-4">
          Lorem ipsum dolor sit amet consectetur. Viverra euismod duis aliquam
          ipsum. Ac senectus turpis sed sagittis nulla feugiat vulputate. Massa
          vulputate donec ligula elit ut. Viverra eros ut morbi auctor odio
          enim.
        </p>
      </section>
    </>
  );
}
