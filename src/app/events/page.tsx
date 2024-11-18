import RunningShows from "./_components/running-shows";
import UpcomingMovies from "./_components/upcoming-movies";

export const dynamic = "force-dynamic";

export default function EventsPage() {
  return (
    <>
      <RunningShows />
      <UpcomingMovies />
    </>
  );
}
