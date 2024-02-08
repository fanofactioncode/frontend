import { Calendar, Map } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-auto rounded-3xl">
      <Image
        src="/assets/phir-hera-pheri.png"
        alt="Coming Soon"
        className="rounded-[3em]"
        width={0}
        height={499}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />

      <div className="absolute w-[95%] px-8 py-6 rounded-3xl text-white bg-[#141414]/90 z-50 bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-sm">
            Directed By <span className="font-bold">Niraj Bhora</span>
          </h3>
          <h1 className="text-3xl font-bold">Phir Hera Pheri</h1>
        </div>

        <div className="flex items-center gap-12">
          <div className="space-y-1">
            <div className="flex gap-1 items-center">
              <Calendar size={18} />
              <p className="text-sm">Release Date</p>
            </div>
            <h2 className="text-xl font-semibold">Comming Soon</h2>
          </div>
          <div className="space-y-1">
            <div className="flex gap-1 items-center">
              <Map size={18} />
              <p className="text-sm">Theater</p>
            </div>
            <h2 className="text-xl font-semibold">Near You</h2>
          </div>
          <button className="px-5 py-2.5 bg-black rounded-xl">Book Now</button>
        </div>
      </div>
    </div>
  );
}
