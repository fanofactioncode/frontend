"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { theaterLayoutReponse } from "../_mock/response";

import Screen from "./screen";

export default function TheaterLayout() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const _gridColsRepeat = `grid-cols-[repeat(${theaterLayoutReponse.maxSeats + 1},_minmax(0,_32px))]`;

  return (
    <>
      <main className="container max-w-fit flex-1 overflow-auto py-9">
        <Screen />
        {theaterLayoutReponse.layout.map((layout) => (
          <div key={layout.type} className="mb-8 w-full pb-8">
            <p className="w-full text-sm font-light text-gray-500">
              ₹ {layout.price} ({layout.type})
            </p>
            <hr className="my-4 mt-2" />

            <div
              key={layout.type}
              className={cn(
                "mt-2 grid grid-cols-[repeat(24,_minmax(0,_32px))] items-center justify-center gap-2"
                //   gridColsRepeat
              )}
            >
              {layout.rows.map((row) => (
                <>
                  <div className="grid size-8 select-none place-content-center rounded-sm">
                    <p className="text-sm text-text">{row.label}</p>
                  </div>
                  {row.seats.map((seat) => (
                    <button
                      key={seat.id}
                      className={cn(
                        "grid size-8 cursor-pointer select-none place-content-center rounded-sm border-2 border-[#b9f18c] text-sm font-medium text-text transition-all duration-150 hover:border-[#102132] hover:bg-[#102132]/80 hover:text-white",
                        seat?.type === "space" ? "invisible" : "",
                        selectedSeats.includes(seat.id) &&
                          "border-[#102132] bg-[#102132] text-white hover:bg-[#102132]",
                        seat?.bookingStatus === "booked" &&
                          "cursor-not-allowed border-[#E1E1E1] bg-[#E1E1E1] text-[#2D2D2D] hover:border-[#E1E1E1] hover:bg-[#E1E1E1] hover:text-[#2D2D2D]"
                      )}
                      disabled={seat?.bookingStatus === "booked"}
                      onClick={() => {
                        if (seat.type === "space") return;

                        if (selectedSeats.includes(seat.id)) {
                          setSelectedSeats(
                            selectedSeats.filter((id) => id !== seat.id)
                          );
                        } else {
                          if (selectedSeats.length < 10) {
                            setSelectedSeats([...selectedSeats, seat.id]);
                          } else {
                            alert("Enough is enough");
                          }
                        }
                      }}
                    >
                      {seat.label}
                    </button>
                  ))}
                </>
              ))}
            </div>
          </div>
        ))}
      </main>

      {selectedSeats.length > 0 && (
        <div className="sticky bottom-0 bg-secondary/35 py-5">
          <div className="container flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-text">₹ 160.00</p>
              <p className="text-base text-text-sub">Ticket 4 x 160.00</p>
            </div>

            <Button>Pay ₹ {160.0 * selectedSeats.length}</Button>
          </div>
        </div>
      )}
    </>
  );
}
