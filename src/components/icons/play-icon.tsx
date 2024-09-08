import React from "react";

import { cn } from "@/lib/utils";

import type { IconProps } from "./types";

export function PlayIcon({ size, color, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <rect
        x="2.5"
        y="2.5"
        width="45"
        height="45"
        rx="22.5"
        stroke={color}
        strokeWidth="5"
      />
      <path
        d="M32 23.2679C33.3333 24.0377 33.3333 25.9623 32 26.7321L23 31.9282C21.6667 32.698 20 31.7358 20 30.1962L20 19.8038C20 18.2642 21.6667 17.302 23 18.0718L32 23.2679Z"
        fill={color}
      />
    </svg>
  );
}
