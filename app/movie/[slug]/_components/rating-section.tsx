import React from "react";
import { Star } from "lucide-react";

export default function RatingSection() {
  return (
    <div className="flex flex-col sm:flex-row py-10 sm:py-20 text-white gap-10">
      <div className="w-full sm:w-9/12 space-y-2">
        <h2 className="text-xl font-bold">Description</h2>
        <p className="font-light text-gray-400">
          A twist of fate changes the lives of Raju, Shyam and Baburao when they
          get cheated by a fraudster. They must now find another way to repay
          the loan taken from a dreaded gangster.
        </p>
      </div>

      <div className="w-full sm:w-3/12">
        <h2 className="text-xl font-bold">Hype</h2>

        <div className="flex items-center gap-5 mt-3">
          <p className="">Rating</p>
          <div className="flex gap-2 items-center">
            {Array.from({ length: 10 }).map((_, index) => (
              <Star
                key={`__${index}`}
                size={20}
                fill={index + 1 < 8 ? "white" : "transparent"}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-5 mt-3">
          <p>Duration</p>
          <p>2h</p>
        </div>
      </div>
    </div>
  );
}
