import React from "react";

import { IconType } from "./types";

export function MoonIcon({ size, className }: IconType) {
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
        d="M3.8743 10.7955C5.42536 13.2996 8.71268 14.0721 11.2167 12.5211C11.9281 12.0804 12.4997 11.4997 12.918 10.8366C10.9523 11.0361 8.95197 10.1308 7.84154 8.33812C6.73111 6.54543 6.81161 4.35128 7.86579 2.68018C7.08577 2.75933 6.3112 3.01244 5.59984 3.45307C3.09579 5.00414 2.32323 8.29146 3.8743 10.7955Z"
        stroke="#ABB7C4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
