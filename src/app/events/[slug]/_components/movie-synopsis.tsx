import { Suspense } from "react";

import { MovieSysnopsisDesktopSkeleton } from "@/components/skeleton/events/movie-sysnopsis-desktop-skeleton";
import { MovieSysnopsisMobileSkeleton } from "@/components/skeleton/events/movie-sysnopsis-mobile-skeleton";

import { MovieSysnopsisDesktop } from "./movie-synopsis-desktop";
import { MovieSysnopsisMobile } from "./movie-synopsis-mobile";

export function MovieSysnopsis({ id }: { id: string }) {
  return (
    <>
      <Suspense fallback={<MovieSysnopsisDesktopSkeleton />}>
        <MovieSysnopsisDesktop id={id} />
      </Suspense>
      <Suspense fallback={<MovieSysnopsisMobileSkeleton />}>
        <MovieSysnopsisMobile id={id} />
      </Suspense>
    </>
  );
}
