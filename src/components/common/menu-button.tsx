"use client";

import { motion, MotionConfig } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { useNavigation } from "@/provider/navigation-provider";

export default function MenuButton() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { isOpen, toggleNavigation } = useNavigation();

  const handleMenuButtonClick = () => {
    if (!isOpen) router.push("?open-menu=true");
    else router.refresh();

    toggleNavigation();
  };

  useEffect(() => {
    // close the rollback menu when the browser's back button has been changed
    if (isOpen && !searchParams.has("open-menu")) {
      toggleNavigation();
    }
  }, [pathname, searchParams]);

  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        onClick={handleMenuButtonClick}
        className="relative size-9 rounded-full border-[1px] border-secondary dark:border-primary md:hidden"
        animate={isOpen ? "open" : "close"}
      >
        <motion.span
          style={{
            left: "50%",
            top: "40%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute inline-block h-[2px] w-5 rounded-full bg-primary"
          variants={{
            open: {
              rotate: ["0deg", "45deg", "45deg"],
              top: ["40%", "50%", "50%"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "40%"],
            },
          }}
        ></motion.span>
        <motion.span
          style={{
            left: "50%",
            top: "55%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute inline-block h-[2px] w-5 rounded-full bg-primary"
          variants={{
            open: {
              rotate: ["0deg", "-45deg", "-45deg"],
              top: ["60%", "50%", "50%"],
            },
            close: {
              rotate: ["-45deg", "0deg", "0deg"],
              top: ["50%", "50%", "60%"],
            },
          }}
        ></motion.span>
      </motion.button>
    </MotionConfig>
  );
}
