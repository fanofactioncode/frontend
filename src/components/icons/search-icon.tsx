import React from "react";

import type { IconProps } from "./types";

export function SearchIcon({ size, color, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M0.882812 9.08834C0.882812 15.4043 7.71998 19.3518 13.1897 16.1938C15.7283 14.7282 17.2921 12.0196 17.2921 9.08834C17.2921 2.77242 10.4549 -1.17499 4.98515 1.98292C2.44656 3.44859 0.882812 6.15717 0.882812 9.08834Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M14.8906 14.89L19.1169 19.1163"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}
