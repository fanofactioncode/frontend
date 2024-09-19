import React from "react";

import { Button } from "@/components/ui/button";

export interface BookingFooterProps {
  isAnySeatSelected: boolean;
  ticketPrice: number;
  totalNumberOfSeatsSelected: number;
  totalPrice: number;
}

export default function BookingFooter({
  isAnySeatSelected,
  ticketPrice,
  totalNumberOfSeatsSelected,
  totalPrice,
}: BookingFooterProps) {
  if (!isAnySeatSelected) return false;

  return (
    <div className="sticky bottom-0 bg-secondary py-3">
      <div className="container flex items-center justify-between">
        <div>
          <p className="text-lg font-bold text-text">₹ {ticketPrice}</p>
          <p className="text-base text-text-sub">
            Ticket {totalNumberOfSeatsSelected} x {ticketPrice}
          </p>
        </div>

        <Button size="default">Pay ₹ {totalPrice}</Button>
      </div>
    </div>
  );
}
