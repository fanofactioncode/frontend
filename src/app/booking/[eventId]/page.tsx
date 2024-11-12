import { BookingDates } from "./_components/booking-dates";
import { BookingMovieDetail } from "./_components/booking-movie-detail";
import { BookingTimes } from "./_components/booking-times";

export default function BookingPage() {
  return (
    <>
      <BookingMovieDetail />
      <BookingDates />
      <BookingTimes />
    </>
  );
}
