import React from "react";
import CastItem from "./cast-item";

export default function CastSection() {
  return (
    <div className="flex pt-0 pb-20 text-white">
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Cast</h2>

        <div className="flex items-center flex-wrap gap-8">
          <CastItem url="/assets/ak.png" name="Akshay Kumar" />
          <CastItem url="/assets/anna.png" name="Suniel Shetty" />
          <CastItem url="/assets/babu.png" name="Paresh Rawal" />
        </div>
      </div>
    </div>
  );
}
