"use client";

import { useEffect, useState } from "react";

export function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    function calculateScreenWidth() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", calculateScreenWidth);
    calculateScreenWidth();

    return () => {
      window.removeEventListener("resize", calculateScreenWidth);
    };
  }, []);

  return screenWidth;
}
