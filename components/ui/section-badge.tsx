import React from "react";

export default function SectionBadge({ children }: React.PropsWithChildren) {
  return (
    <span className="bg-white border border-primary text-sm rounded-xl px-4 py-2 text-black">
      {children}
    </span>
  );
}
