import React from "react";

import { IconProps } from "./types";
import { cn } from "@/lib/utils";

export function PlayIcon({ size, color, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      width={size}
      height={size}
      className={cn(className)}
    >
      <rect
        x="5"
        y="5"
        width="90"
        height="90"
        rx="45"
        stroke={color}
        strokeWidth="10"
      />
      <path d="M66 50L42 63.8564L42 36.1436L66 50Z" fill={color} />
    </svg>
  );
}
