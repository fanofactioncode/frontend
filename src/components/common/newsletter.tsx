import React from "react";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Badge from "../ui/badge";

export default function Newsletter() {
  return (
    <div className="bg-secondary py-16">
      <div className="container flex flex-col items-center justify-center gap-5">
        <Badge>Stay Connected</Badge>

        <h2 className="text-4xl text-text font-bold text-center leading-tight">
          Bring sanity back to your website
        </h2>
        <p className="text-text text-sm">
          It&apos;s free to sign up on our newsletter
        </p>

        <div className="flex items-center gap-2 bg-background py-2 px-[0.6em] rounded-[1.8em] border-2 border-black">
          <Input
            placeholder="Your email"
            type="email"
            className="border-none focus-visible:ring-transparent text-sm text-text sm:min-w-[300px] max-w-full"
          />
          <Button className="text-sm hover:bg-primary px-6 py-6 rounded-[1.4em]">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
