import React from "react";

import type { IconProps } from "./types";

export function RecommendationIcon({ size, color, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M29.125 13.1885H19.0469L16 3.81348L12.9532 13.1885H2.875L11.0782 18.8135L7.9141 28.1885L16 22.3291L24.086 28.1885L20.9219 18.8135L29.125 13.1885Z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
