import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SectionBadge from "../ui/section-badge";

export default function Newsletter() {
  return (
    <div className="bg-green py-24">
      <div className="container flex flex-col items-center justify-center gap-8">
        <SectionBadge>Stay Connected</SectionBadge>

        <h2 className="text-4xl sm:text-6xl text-black font-bold text-center leading-tight">
          Bring sanity back to
          <br className="hidden sm:block" /> your website
        </h2>
        <p className="text-black">
          It&apos;s free to sign up on our newsletter
        </p>

        <div className="flex items-center gap-2 bg-white py-2 px-3 rounded-3xl border-2 border-black">
          <Input
            placeholder="Your email"
            className="border-none focus-visible:ring-transparent text-black sm:min-w-[300px] max-w-full"
          />
          <Button className="bg-black hover:bg-primary px-12 py-6 rounded-2xl text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
