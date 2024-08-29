import React from "react";

import MovieRequestForm from "./_components/movie-request-form";

export default function RequestMoviePage() {
  return (
    <main className="container py-16 sm:py-24">
      <h1 className="text-4xl max-w-[750px] mx-auto text-text font-bold text-center leading-snug sm:text-6xl">
        What you want to{" "}
        <span className="bg-[#B9F18C] dark:bg-[#FF499E] rounded-xl px-1.5 py-0.5">
          watch
        </span>{" "}
        next ?
      </h1>
      <p className="text-sm max-w-[750px] mx-auto text-text-sub text-center mt-2 sm:text-base">
        Tell us what you want to see on your city, and we’ll release it for you.
        We know you want to celebrate the movie we also do the same.
      </p>

      <MovieRequestForm />
    </main>
  );
}
