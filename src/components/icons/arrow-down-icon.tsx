import React from "react";

import { IconProps } from "./types";

export function ArrowDownIcon({ size, color, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9 11.9439L4.6875 7.63139L5.46016 6.85873L9 10.3986L12.5398 6.85873L13.3125 7.63139L9 11.9439Z"
        fill={color}
      />
    </svg>
  );
}
