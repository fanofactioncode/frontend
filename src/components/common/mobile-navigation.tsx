"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import { useNavigation } from "@/provider/navigation-provider";

import { FacebookIcon, InstagramIcon, YoutubeIcon } from "../icons";

const ThemeButton = dynamic(() => import("./theme-button"), { ssr: false });

export default function MobileNavigation() {
  const { isOpen, toggleNavigation } = useNavigation();

  return (
    <motion.nav
      className="fixed top-0 z-40 h-screen w-full bg-background/90 py-20 backdrop-blur-md"
      variants={{
        open: {
          translateY: 0,
        },
        close: {
          translateY: "-100%",
        },
      }}
      initial="close"
      animate={isOpen ? "open" : "close"}
    >
      <ul className="w-full space-y-3 px-4 py-8">
        <li className="w-full py-3 text-xl font-medium text-text">
          <Link href="/" className="block" onClick={() => toggleNavigation()}>
            Home
          </Link>
        </li>
        <li className="w-full py-3 text-xl font-medium text-text">
          <Link
            href="/events"
            className="block"
            onClick={() => toggleNavigation()}
          >
            Events
          </Link>
        </li>
        <li className="w-full py-3 text-xl font-medium text-text">
          <Link
            href="/about-us"
            className="block"
            onClick={() => toggleNavigation()}
          >
            About
          </Link>
        </li>
        <li className="w-full py-3 text-xl font-medium text-text">
          <Link
            href="/contact-us"
            className="block"
            onClick={() => toggleNavigation()}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-4 px-4">
        <FacebookIcon className="size-8 fill-text" />
        <InstagramIcon className="size-8 fill-text" />
        <YoutubeIcon className="size-8 fill-text" />
      </div>

      <div className="absolute bottom-28 right-6 [&>button]:border-foreground [&>div]:border-foreground [&>svg]:fill-foreground [&>svg]:stroke-foreground">
        <ThemeButton />
      </div>
    </motion.nav>
  );
}
