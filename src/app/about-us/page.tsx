import React from "react";

export default function AboutUsPage() {
  return (
    <main className="container py-16 sm:flex">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-center text-4xl font-bold text-text">
          Are you{" "}
          <span className="rounded-xl bg-[#B9F18C] px-1.5 py-0.5 dark:bg-[#FF499E]">
            excited
          </span>{" "}
          about us, want to know more ?
        </h1>
        <p className="text-center text-sm text-text-sub">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          sapiente alias perspiciatis, ipsam blanditiis quidem soluta non.
          Obcaecati ipsam qui officia nemo rem, quasi facere, vero, eius
          deserunt nulla nam?
        </p>
      </div>

      <div className="mt-8 h-[180px] w-full rounded-2xl bg-gray-400"></div>
    </main>
  );
}
