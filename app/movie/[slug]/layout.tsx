import Image from "next/image";
import React from "react";

export default function MovieLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return (
    <div className="mx-auto bg-primary">
      <div className="container py-4">
        <div className="px-5 py-2 rounded-3xl bg-gray-600/25 flex items-center justify-between">
          <div className="h-14 w-14 shrink-0 relative">
            <Image src="/fan-of-action.svg" alt="logo" fill />
          </div>

          <nav className="hidden items-center gap-4 text-white">
            <ul className="flex gap-4">
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
            <button className="bg-black px-4 py-2.5 rounded-xl">
              Book Now
            </button>
          </nav>
        </div>
      </div>
      <div className="container">{children}</div>
    </div>
  );
}
