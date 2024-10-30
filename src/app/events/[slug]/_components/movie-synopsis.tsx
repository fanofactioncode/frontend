import { MovieSysnopsisDesktop } from "./movie-synopsis-desktop";
import { MovieSysnopsisMobile } from "./movie-synopsis-mobile";

export function MovieSysnopsis() {
  return (
    <>
      <MovieSysnopsisMobile />
      <MovieSysnopsisDesktop />
    </>
  );
}
