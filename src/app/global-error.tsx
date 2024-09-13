"use client";

import PageLayout from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <PageLayout>
          <main className="py-28">
            <div className="container flex flex-col items-center justify-center">
              <h1 className="text-[150px] font-bold text-text/20">500</h1>
              <h2 className="text-center text-3xl font-bold text-text">
                Something is not right
              </h2>
              <p className="text-center text-sm text-text-sub">
                {error.message ??
                  "There is something wrong from our side. Please try again"}
              </p>

              <Button
                className="mt-10 rounded-2xl px-8 py-6 text-sm"
                onClick={reset}
              >
                Retry Again
              </Button>
            </div>
          </main>
        </PageLayout>
      </body>
    </html>
  );
}
