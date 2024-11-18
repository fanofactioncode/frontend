export function MovieSysnopsisDesktopSkeleton() {
  return (
    <div className="container hidden py-5 sm:block">
      <div className="relative h-[600px] overflow-hidden rounded-3xl">
        <div className="absolute z-0 h-full w-full animate-pulse bg-text/10" />
        <div className="z-50 flex h-full items-start gap-[1.875rem] bg-gradient-to-r from-text/10 from-35% via-text/5 via-75% to-transparent to-100% p-[3.75rem] sm:w-full md:w-9/12">
          <div className="h-72 w-52 shrink-0 animate-pulse rounded-xl bg-text/10" />

          <div className="mt-4 w-full space-y-5">
            <div className="h-10 w-1/2 animate-pulse rounded-xl bg-text/10" />

            <div className="space-y-1">
              <div className="h-3 w-full animate-pulse rounded-xl bg-text/10" />
              <div className="h-3 w-11/12 animate-pulse rounded-xl bg-text/10" />
              <div className="h-3 w-6/12 animate-pulse rounded-xl bg-text/10" />
            </div>

            <div className="flex items-center gap-3">
              <div className="h-5 w-12 animate-pulse rounded-lg bg-text/10" />
              <div className="h-5 w-12 animate-pulse rounded-lg bg-text/10" />
            </div>

            <div className="mt-4 h-12 w-40 animate-pulse rounded-xl bg-text/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
