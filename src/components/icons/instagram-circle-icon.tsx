import React from "react";

import { IconProps } from "./types";

export function InstagramCircleIcon({ size: _s, className }: IconProps) {
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
        d="M20.75 40.79C31.7957 40.79 40.75 31.8872 40.75 20.905C40.75 9.92283 31.7957 1.02002 20.75 1.02002C9.70431 1.02002 0.75 9.92283 0.75 20.905C0.75 31.8872 9.70431 40.79 20.75 40.79Z"
        className="stroke-[#B7B7B7] dark:stroke-primary"
        strokeWidth="1.25"
      />
      <g clipPath="url(#clip0_994_1651)">
        <path
          d="M24.8229 13.5015H17.2795C15.1965 13.5015 13.5078 15.1804 13.5078 17.2515V24.7515C13.5078 26.8225 15.1965 28.5015 17.2795 28.5015H24.8229C26.9059 28.5015 28.5946 26.8225 28.5946 24.7515V17.2515C28.5946 15.1804 26.9059 13.5015 24.8229 13.5015Z"
          className="stroke-primary"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.0724 20.5287C24.1655 21.1529 24.0583 21.7904 23.7659 22.3505C23.4736 22.9106 23.0111 23.3648 22.4442 23.6485C21.8773 23.9322 21.2349 24.0309 20.6083 23.9307C19.9817 23.8304 19.4029 23.5363 18.9541 23.0901C18.5053 22.6439 18.2095 22.0684 18.1086 21.4454C18.0078 20.8224 18.1071 20.1836 18.3925 19.62C18.6778 19.0563 19.1346 18.5965 19.698 18.3059C20.2613 18.0153 20.9025 17.9086 21.5303 18.0012C22.1706 18.0956 22.7635 18.3923 23.2213 18.8474C23.679 19.3026 23.9774 19.892 24.0724 20.5287Z"
          className="stroke-primary"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse cx="25.2021" cy="16.8735" rx="1.13177" ry="1.125" />
      </g>
      <defs>
        <clipPath id="clip0_994_1651">
          <rect width="18.1041" height="18" transform="translate(12 12)" />
        </clipPath>
      </defs>
    </svg>
  );
}
