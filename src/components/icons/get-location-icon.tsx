import React from "react";

import { IconProps } from "./types";

export function GetLocationIcon({ size, color, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_960_2473)">
        <path
          d="M6 2.61677V1.12695"
          stroke={color}
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 10.8736V9.38379"
          stroke={color}
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.38281 6H10.8727"
          stroke={color}
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.125 6H2.61491"
          stroke={color}
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.99659 9.38379C8.1619 9.38379 9.37989 8.16581 9.37989 6.00049C9.37989 3.83518 8.1619 2.61719 5.99659 2.61719C3.83127 2.61719 2.61328 3.83518 2.61328 6.00049C2.61328 8.16581 3.83127 9.38379 5.99659 9.38379Z"
          stroke={color}
          strokeWidth="1.71"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_960_2473">
          <rect width="12" height="12" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
}
