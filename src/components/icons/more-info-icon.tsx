import React from "react";

import { IconProps } from "./types";

export function MoreInfoIcon({ size, color, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_960_2482)">
        <path
          d="M2.11147 9.45699C3.89826 11.5553 8.10307 11.5553 9.88987 9.45699C11.5356 7.52442 11.4107 3.74166 9.4299 2.0871C7.65561 0.605082 4.34571 0.605082 2.57146 2.0871C0.590638 3.74166 0.465731 7.52442 2.11147 9.45699Z"
          stroke={color}
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.00391 5.2041H5.39911C5.83878 5.2041 6.1952 5.56053 6.19518 6.0002L6.19512 8.17746"
          stroke={color}
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.01562 8.17676H7.38653"
          stroke={color}
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.20703 3.38867V3.64563"
          stroke={color}
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_960_2482">
          <rect width="12" height="12" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
}
