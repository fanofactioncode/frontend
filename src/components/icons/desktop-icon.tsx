import React from "react";

import { IconProps } from "./types";

export function DesktopIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.66667 12H4C2.89543 12 2 11.1046 2 10V4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V10C14 11.1046 13.1046 12 12 12H9.33333M6.66667 12V14M6.66667 12H9.33333M6.66667 14H9.33333M6.66667 14H6M9.33333 14V12M9.33333 14H10"
        stroke="#ABB7C4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
