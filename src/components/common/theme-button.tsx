"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { DesktopIcon, MoonIcon, SunIcon } from "../icons";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  if (!theme) return false;

  return (
    <div className="rounded-full border box-border border-[#ABB7C4] flex grow-0 w-fit">
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "p-1.5 h-auto w-auto rounded-full border border-transparent hover:bg-transparent hover:text-white",
          theme === "system" && "border-[#ABB7C4]",
        )}
        onClick={() => setTheme("system")}
      >
        <DesktopIcon className="size-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "p-1.5 h-auto w-auto rounded-full border border-transparent hover:bg-transparent hover:text-white",
          theme === "light" && "border-[#ABB7C4]",
        )}
        onClick={() => setTheme("light")}
      >
        <SunIcon className="size-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "p-1.5 h-auto w-auto rounded-full border border-transparent hover:bg-transparent hover:text-white",
          theme === "dark" && "border-[#ABB7C4]",
        )}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="size-5" />
      </Button>
    </div>
  );
}
