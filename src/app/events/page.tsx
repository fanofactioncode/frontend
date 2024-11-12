import RunningShows from "./_components/running-shows";
import UpcomingMovies from "./_components/upcoming-movies";

export default async function EventsPage() {
  return (
    <>
      <RunningShows />
      <UpcomingMovies />
    </>
  );
}
