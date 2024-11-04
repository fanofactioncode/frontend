import React from "react";

export function UpcomingShowsDesktopSkeleton() {
  return (
    <div className="container hidden md:block">
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-4 sm:gap-8 md:grid-cols-5">
        {Array.from({ length: 5 }).map((item) => (
          <div
            key={`movie_skeleton_desktop_${item}`}
            className="shrink-0 animate-pulse space-y-2 md:space-y-4"
          >
            <div className="relative h-96 w-full rounded-lg bg-text/10 md:rounded-xl" />

            <div className="space-y-1.5 md:space-y-2">
              <div className="h-5 w-full rounded-md bg-text/10"></div>
              <div className="h-3 w-1/2 rounded-md bg-text/10"></div>

              <div className="flex items-center gap-2">
                <div className="h-4 w-1/6 rounded-md bg-text/10" />
                <div className="h-4 w-1/6 rounded-md bg-text/10" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
