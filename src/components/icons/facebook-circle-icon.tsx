import React from "react";

import { IconProps } from "./types";

export function FacebookCircleIcon({ size: _s, className }: IconProps) {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20.75 41.0199C31.7957 41.0199 40.75 32.1171 40.75 21.135C40.75 10.1528 31.7957 1.25 20.75 1.25C9.70431 1.25 0.75 10.1528 0.75 21.135C0.75 32.1171 9.70431 41.0199 20.75 41.0199Z"
        strokeWidth="1.25"
        className="stroke-[#B7B7B7] dark:stroke-primary"
      />
      <path
        d="M19.0229 29.0275L19 22.0154H16V19.0103H19V17.0069C19 14.303 20.6715 13 23.0794 13C24.2328 13 25.2241 13.086 25.5129 13.1245V15.9501L23.843 15.9509C22.5334 15.9509 22.2799 16.5742 22.2799 17.4889V19.0103H26L25 22.0154H22.2799V29.0275H19.0229Z"
        className="fill-primary"
      />
    </svg>
  );
}
