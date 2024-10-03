import React from "react";

import type { IconProps } from "./types";

export function ReviewIcon({ size, color, className }: IconProps) {
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
        d="M10.6946 27.6759L2.20312 29.7988L4.32598 23.4302V4.32452C4.32598 3.76149 4.54965 3.22154 4.94775 2.82343C5.34587 2.42532 5.88582 2.20166 6.44884 2.20166H27.6774C28.2404 2.20166 28.7804 2.42532 29.1785 2.82343C29.5765 3.22154 29.8003 3.76149 29.8003 4.32452V25.5531C29.8003 26.1161 29.5765 26.6561 29.1785 27.0542C28.7804 27.4522 28.2404 27.6759 27.6774 27.6759H10.6946Z"
        stroke={color}
        strokeWidth="1.71"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6953 11.7544H23.4325"
        stroke={color}
        strokeWidth="1.71"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6953 18.123H19.1867"
        stroke={color}
        strokeWidth="1.71"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
