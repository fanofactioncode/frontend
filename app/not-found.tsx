import PageLayout from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <PageLayout>
      <main className="py-28">
        <div className="container justify-center items-center flex flex-col">
          <h1 className="text-[150px] font-bold text-black/20">404</h1>
          <h2 className="text-black text-center text-3xl font-bold">
            We&apos;ve lost this page
          </h2>
          <p className="text-center text-sm text-[#282828]">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>

          <Button
            className="mt-10 text-sm text-white bg-black px-8 py-6 rounded-2xl"
            asChild={true}
          >
            <Link href="/">Go to home</Link>
          </Button>
        </div>
      </main>
    </PageLayout>
  );
}
