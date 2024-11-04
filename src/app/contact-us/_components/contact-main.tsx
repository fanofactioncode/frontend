import React from "react";

import { Badge } from "@/components/ui/badge";

import { ContactForm } from "./contact-form";
import { SocialLinks } from "./social-links";

export function ContactMain() {
  return (
    <main className="container relative py-16 sm:py-24">
      <div className="sm:mx-auto sm:max-w-[750px]">
        <div className="sm:flex sm:items-center sm:justify-center">
          <Badge>Get Started</Badge>
        </div>
        <div className="mt-3 flex items-start justify-between gap-6">
          <h1 className="text-4xl font-extrabold text-text sm:text-center sm:text-5xl sm:leading-tight">
            Get in touch with us. We&apos;re here to assist you.
          </h1>

          <SocialLinks />
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
