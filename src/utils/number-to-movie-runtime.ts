export function numberToMovieRuntime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;

  return `${hours}hr ${minutesLeft}min`;
}
