import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "bg-white dark:border-primary dark:text-primary dark:bg-primary-foreground border border-black text-sm rounded-xl text-black",
  {
    variants: {
      size: {
        default: "text-xs px-[0.9em] py-[0.4em]",
        lg: "text-base sm:text-lg px-[1em] py-[0.5em]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export default function Badge({ children, size }: BadgeProps) {
  return <span className={badgeVariants({ size })}>{children}</span>;
}
