"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";

import { theaterLayoutReponse } from "../_mock/response";
import { ILayout, ISeat } from "../_types/response.type";

import Screen from "./screen";
import BookingFooter from "./booking-footer";

export default function TheaterLayout() {
  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);
  const [choosedSection, setChoosedSection] = useState<ILayout | null>(null);

  function checkIfItIsSpace(seat: ISeat): boolean {
    return seat.type === "space";
  }

  function checkIsItPreviouslyChoosedSection(layout: ILayout): boolean {
    if (choosedSection === null) return true;

    return layout.type === choosedSection.type;
  }

  function isAlreadySelectedSeat(seat: ISeat): boolean {
    return selectedSeats.some((selectedSeat) => selectedSeat.id === seat.id);
  }

  function isAlreadyBookedSeat(seat: ISeat): boolean {
    return seat.bookingStatus === "booked";
  }

  function selectSeat(seat: ISeat) {
    setSelectedSeats((prev) => [...prev, seat]);
  }

  function unselectSeat(seat: ISeat) {
    const newSelectedSeats = selectedSeats.filter(
      (selectedSeat) => selectedSeat.id !== seat.id
    );
    setSelectedSeats(newSelectedSeats);

    if (newSelectedSeats.length === 0) setChoosedSection(null);
  }

  function isMaximumNumberOfSeatsSelected(): boolean {
    return selectedSeats.length >= 10;
  }

  function selectSection(layout: ILayout) {
    setChoosedSection(layout);
  }

  const isAnySeatSelected = selectedSeats.length > 0 && choosedSection !== null;
  const ticketPrice = choosedSection?.price ?? 0;
  const totalPrice = ticketPrice * selectedSeats.length;
  const totalNumberOfSeatsSelected = selectedSeats.length;

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
                "mt-2 grid items-center justify-center gap-1 sm:gap-2"
              )}
              style={{
                gridTemplateColumns: `repeat(${theaterLayoutReponse.maxSeats + 1}, minmax(0, 32px))`,
              }}
            >
              {layout.rows.map((row) => (
                <>
                  <div className="grid size-8 select-none place-content-center rounded-sm">
                    <p className="text-sm text-text">{row.label}</p>
                  </div>
                  {row.seats.map((seat, idx) => (
                    <button
                      key={layout.type + seat.label + seat.id + idx}
                      className={cn(
                        "grid size-6 cursor-pointer select-none place-content-center rounded-sm border-2 border-[#b9f18c] text-xs font-medium text-text transition-all duration-150 hover:border-[#102132] hover:bg-[#102132]/80 hover:text-white sm:size-8 sm:text-sm",
                        checkIfItIsSpace(seat) ? "invisible" : "",
                        isAlreadySelectedSeat(seat) &&
                          "border-[#102132] bg-[#102132] text-white hover:bg-[#102132]",
                        isAlreadyBookedSeat(seat) &&
                          "cursor-not-allowed border-[#E1E1E1] bg-[#E1E1E1] text-[#2D2D2D] hover:border-[#E1E1E1] hover:bg-[#E1E1E1] hover:text-[#2D2D2D]"
                      )}
                      disabled={isAlreadyBookedSeat(seat)}
                      onClick={() => {
                        if (checkIfItIsSpace(seat)) return;

                        if (!checkIsItPreviouslyChoosedSection(layout)) {
                          if (confirm("You are going to other section")) {
                            selectSection(layout);
                            setSelectedSeats([seat]);
                          }

                          return;
                        }

                        selectSection(layout);

                        if (isAlreadySelectedSeat(seat))
                          return unselectSeat(seat);

                        if (isMaximumNumberOfSeatsSelected())
                          return alert("Enough is enough");

                        selectSeat(seat);
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

      <BookingFooter
        isAnySeatSelected={isAnySeatSelected}
        ticketPrice={ticketPrice}
        totalNumberOfSeatsSelected={totalNumberOfSeatsSelected}
        totalPrice={totalPrice}
      />
    </>
  );
}
