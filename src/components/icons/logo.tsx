import { IconProps } from "./types";

export const LogoIcon = ({ size, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 129 129"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="64.5" cy="64.5" r="64.5" fill="#0F2133" />
    <rect
      opacity="0.6"
      x="28.1337"
      y="60.674"
      width="17.9338"
      height="69.65"
      rx="8.96691"
      transform="rotate(-110 28.1337 60.674)"
      fill="#ABB7C4"
    />
    <rect
      x="65.9808"
      y="79.2985"
      width="22.9386"
      height="22.9386"
      rx="11.4693"
      transform="rotate(-110 65.9808 79.2985)"
      fill="#ABB7C4"
    />
    <rect
      x="22"
      y="43.8217"
      width="17.9338"
      height="69.65"
      rx="8.96691"
      transform="rotate(-20 22 43.8217)"
      fill="#ABB7C4"
    />
  </svg>
);
