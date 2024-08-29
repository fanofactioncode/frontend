import React from "react";

import { IconProps } from "./types";

export function SunIcon({ size, className }: IconProps) {
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
        d="M8.00161 2.6665V3.33317M8.00161 12.6665V13.3332M3.38281 5.33317L3.96016 5.6665M12.0431 10.3332L12.6204 10.6665M12.6204 5.33317L12.0431 5.6665M3.96017 10.3332L3.38282 10.6665M10.6683 7.99984C10.6683 6.52708 9.47437 5.33317 8.00161 5.33317C6.52886 5.33317 5.33495 6.52708 5.33495 7.99984C5.33495 9.4726 6.52886 10.6665 8.00161 10.6665C9.47437 10.6665 10.6683 9.4726 10.6683 7.99984Z"
        stroke="#ABB7C4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
