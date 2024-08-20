import React from "react";

export default function SectionBadge({ children }: React.PropsWithChildren) {
  return (
    <span className="bg-white border border-primary text-xs rounded-xl px-[0.9em] py-[0.6em] text-black">
      {children}
    </span>
  );
}
