import React from "react";

export default function Badge({ children }: React.PropsWithChildren) {
  return (
    <span className="bg-white dark:border-primary dark:text-primary dark:bg-primary-foreground border border-black text-sm rounded-xl px-[0.9em] py-[0.4em] text-black">
      {children}
    </span>
  );
}
