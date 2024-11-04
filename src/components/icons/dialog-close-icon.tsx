import React from "react";

import { IconProps } from "./types";

export function DialogCloseIcon({ size, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1058_1414)">
        <path
          d="M22.3502 1.65106L1.65234 22.3489"
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.65234 1.65106L22.3502 22.3489"
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1058_1414">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
