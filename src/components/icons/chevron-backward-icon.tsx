import React from "react";

import { IconProps } from "./types";

export function ChevronBackwardIcon({ size, color, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.9419 17.7502L8.16797 11.9762L13.9419 6.20227L14.9721 7.23248L10.2284 11.9762L14.9721 16.72L13.9419 17.7502Z"
        fill={color}
      />
    </svg>
  );
}
