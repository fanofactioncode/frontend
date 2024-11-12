"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { DesktopIcon, MoonIcon, SunIcon } from "../icons";
import { Button } from "../ui/button";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  if (!theme) return false;

  return (
    <div className="box-border flex w-fit grow-0 rounded-full border border-[#ABB7C4]">
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "h-auto w-auto rounded-full border border-transparent p-1.5 hover:bg-transparent hover:text-white",
          theme === "system" && "border-[#ABB7C4]"
        )}
        onClick={() => setTheme("system")}
      >
        <DesktopIcon className="size-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "h-auto w-auto rounded-full border border-transparent p-1.5 hover:bg-transparent hover:text-white",
          theme === "light" && "border-[#ABB7C4]"
        )}
        onClick={() => setTheme("light")}
      >
        <SunIcon className="size-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "h-auto w-auto rounded-full border border-transparent p-1.5 hover:bg-transparent hover:text-white",
          theme === "dark" && "border-[#ABB7C4]"
        )}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="size-5" />
      </Button>
    </div>
  );
}
