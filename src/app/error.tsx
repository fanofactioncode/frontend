"use client";

import PageLayout from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <PageLayout>
      <main className="py-28">
        <div className="container flex max-w-[867px] flex-col items-center justify-center bg-red-500">
          <h1 className="text-[150px] font-bold text-text/20">500</h1>
          <h2 className="text-center text-3xl font-bold text-text">
            Something is not right
          </h2>
          <p className="text-center text-sm text-text-sub">
            {error.message ??
              "Some issue has been caused from our side. Kindly refresh the page for more entertainment."}
          </p>

          <Button className="mt-10 rounded-2xl text-sm" onClick={reset}>
            Refresh
          </Button>
        </div>
      </main>
    </PageLayout>
  );
}
