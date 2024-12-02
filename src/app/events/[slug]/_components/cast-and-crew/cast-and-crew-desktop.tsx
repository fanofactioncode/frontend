import Image from "next/image";

type Cast = {
  name: string;
  image: string;
  role: string;
  character: string;
};

const casts: Cast[] = [
  {
    name: "Henry Cavil",
    image: "/assets/actor-1.png",
    role: "Actor",
    character: "Gus March-Phillips",
  },
  {
    name: "Alan Ritchson",
    image: "/assets/actor-2.png",
    role: "Actor",
    character: "Anders Lassen",
  },
  {
    name: "Hero Fiennes Tiffin",
    image: "/assets/actor-3.png",
    role: "Actor",
    character: "Henry Hayes",
  },
  {
    name: "Alex Pettyfer",
    image: "/assets/actor-4.png",
    role: "Actor",
    character: "Gus March-Phillips",
  },
  {
    name: "Henry Cavil",
    image: "/assets/actor-1.png",
    role: "Actor",
    character: "Gus March-Phillips",
  },
  {
    name: "Alan Ritchson",
    image: "/assets/actor-2.png",
    role: "Actor",
    character: "Anders Lassen",
  },
  {
    name: "Hero Fiennes Tiffin",
    image: "/assets/actor-3.png",
    role: "Actor",
    character: "Henry Hayes",
  },
  {
    name: "Alex Pettyfer",
    image: "/assets/actor-4.png",
    role: "Actor",
    character: "Gus March-Phillips",
  },
];

export function CastAndCrewDesktop() {
  return (
    <section className="container hidden space-y-11 pb-36 pt-5 sm:block">
      <h2 className="text-3xl font-bold text-text">Cast & Crew</h2>

      <div className="flex flex-wrap gap-4">
        {casts.map((cast, index) => (
          <div key={cast.name + index} className="w-[120px]">
            <div className="relative h-[120px] w-[120px] overflow-hidden rounded-xl">
              <Image src={cast.image} alt={cast.name} fill className="w-full" />
            </div>
            <p className="mt-2 w-full text-balance font-semibold text-text">
              {cast.name}
            </p>
            <p className="w-full text-balance text-sm text-text-sub">
              {cast.character}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
