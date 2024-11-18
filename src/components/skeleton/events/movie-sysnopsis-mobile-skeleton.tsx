export function MovieSysnopsisMobileSkeleton() {
  return (
    <div className="container sm:hidden">
      <div className="my-3 h-[166px] animate-pulse overflow-hidden rounded-xl bg-text/10" />

      <div className="flex gap-3">
        <div className="h-44 w-28 animate-pulse overflow-hidden rounded-lg bg-text/10" />

        <div className="mt-3 flex-1 space-y-2">
          <div className="h-6 w-full animate-pulse rounded-md bg-text/10" />
          <div className="h-3 w-10/12 animate-pulse rounded-md bg-text/10" />

          <div className="flex gap-2">
            <div className="flex gap-2">
              <div className="h-4 w-8 animate-pulse rounded-md bg-text/10" />
              <div className="h-4 w-8 animate-pulse rounded-md bg-text/10" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <div className="h-3 w-full animate-pulse rounded-sm bg-text/10" />
        <div className="h-3 w-10/12 animate-pulse rounded-sm bg-text/10" />
        <div className="h-3 w-1/2 animate-pulse rounded-sm bg-text/10" />
      </div>
    </div>
  );
}
