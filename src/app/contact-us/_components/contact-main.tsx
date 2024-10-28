import React from "react";
import Link from "next/link";

import {
  FacebookCircleIcon,
  InstagramCircleIcon,
  TwitterCircleIcon,
} from "@/components/icons";
import { Badge } from "@/components/ui/badge";

import { ContactForm } from "./contact-form";

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

          <div className="bottom-0 right-0 flex flex-col gap-2 sm:absolute sm:bottom-24">
            <Link
              href="https://www.facebook.com/WeAreFanOfAction/"
              aria-label="Facebook"
              target="_blank"
              tabIndex={-1}
            >
              <FacebookCircleIcon />
            </Link>
            <Link
              href="https://www.instagram.com/fanofaction"
              aria-label="Instagram"
              target="_blank"
              tabIndex={-1}
            >
              <InstagramCircleIcon />
            </Link>
            <Link
              href="https://www.youtube.com/@WeAreFanOfAction"
              aria-label="Youtube"
              target="_blank"
              tabIndex={-1}
            >
              <TwitterCircleIcon />
            </Link>
          </div>
        </div>
      </div>
      <ContactForm />
    </main>
  );
}
