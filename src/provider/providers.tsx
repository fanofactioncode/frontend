"use client";

import React from "react";

import { NavigationProvider } from "./navigation-provider";
import { PreferencesProvider } from "./preferences-provider";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PreferencesProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </PreferencesProvider>
    </ThemeProvider>
  );
}
