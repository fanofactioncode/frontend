import { Metadata } from "next";

import { PreviousEvents } from "@/components/common/previous-events";

import { AboutUsMain } from "./_components/about-us-main";
import { WhatWeDo } from "./_components/what-we-do";

export const metadata: Metadata = {
  title: "The Ultimate Destination for Movie Rereleases",
  description:
    "FanOfAction brings you the latest updates on movie rereleases, iconic films returning to theaters. Join us to relive cinematic magic like never before!",
  keywords:
    "rereleases, request a movie, movie rereleases, suggest movies, bring films back to theaters, FanOfAction, iconic movie rereleases, cinema requests, cult classics, favorite films rereleased FanOfAction, fan of action, fan action, fanofaction, fanofaction.com, fanofaction website, fanofaction site",
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
