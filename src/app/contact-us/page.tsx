import React from "react";
import Link from "next/link";

import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FacebookCircleIcon,
  InstagramCircleIcon,
  TwitterCircleIcon,
} from "@/components/icons";

export default function ContactUsPage() {
  return (
    <>
      <main className="container relative py-16 sm:py-24">
        <div className="sm:mx-auto sm:max-w-[750px]">
          <div className="sm:flex sm:items-center sm:justify-center">
            <Badge>Get Started</Badge>
          </div>
          <div className="mt-3 flex items-start justify-between gap-3">
            <h1 className="text-4xl font-bold text-text sm:text-center sm:text-5xl sm:leading-tight">
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
        <div className="my-8 space-y-4 sm:mx-auto sm:my-14 sm:max-w-[500px]">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Message" />
        </div>
        <div className="w-full sm:mx-auto sm:max-w-[500px]">
          <Button className="w-full">Leave us message</Button>
        </div>
      </main>

      <section className="bg-[#ABB7C4]/10 py-16">
        <div className="container">
          <div className="flex flex-col gap-7 sm:flex-row">
            <div className="flex flex-col items-start gap-2 sm:flex-1">
              <Badge>Contact Info</Badge>
              <h2 className="text-3xl font-bold text-text sm:text-4xl">
                We are always happy to assist you
              </h2>
            </div>

            <div className="flex gap-6 sm:flex-1">
              <div className="flex-1 space-y-6">
                <h3 className="relative text-lg font-semibold text-text after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-[42px] after:rounded-full after:bg-[#FF499E] sm:text-xl">
                  Email Address
                </h3>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-text sm:text-base">
                    info@fanofaction.com
                  </p>
                  <p className="text-sm text-text-sub sm:text-base">
                    Assistance hours: <br /> Monday - Friday 6 am to 8 pm EST
                  </p>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h3 className="relative text-lg font-semibold text-text after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-[42px] after:rounded-full after:bg-[#FF499E] sm:text-xl">
                  Number
                </h3>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-text sm:text-base">
                    +91 942 888 7271
                  </p>
                  <p className="text-sm text-text-sub sm:text-base">
                    Assistance hours: <br /> Monday - Friday 6 am to 8 pm EST
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
