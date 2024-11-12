import Link from "next/link";

import PageLayout from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <PageLayout>
      <main className="py-28">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="text-[150px] font-bold text-text/20">404</h1>
          <h2 className="text-center text-3xl font-bold text-text">
            We&apos;ve lost this page
          </h2>
          <p className="text-center text-sm text-text-sub">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>

          <Button
            className="mt-10 rounded-2xl px-8 py-6 text-sm"
            asChild={true}
          >
            <Link href="/">Go to home</Link>
          </Button>
        </div>
      </main>
    </PageLayout>
  );
}
