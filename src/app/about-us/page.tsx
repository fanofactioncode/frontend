import { Metadata } from "next";

import { PreviousEvents } from "@/components/common/previous-events";

import { AboutUsMain } from "./_components/about-us-main";
import { WhatWeDo } from "./_components/what-we-do";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us page",
};

export default function AboutUsPage() {
  return (
    <>
      <AboutUsMain />
      <WhatWeDo />
      <PreviousEvents />
    </>
  );
}
