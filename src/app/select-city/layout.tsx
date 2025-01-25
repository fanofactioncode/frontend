import React from "react";

import { LogoIcon } from "@/components/icons";

import BackButton from "./back-button";

export default function SelectCityLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <>
      <header className="container bg-background/50 py-3 backdrop-blur-md">
        <div className="flex items-center gap-1">
          <BackButton />
          <LogoIcon className="size-12" />
        </div>
      </header>

      {children}
    </>
  );
}
