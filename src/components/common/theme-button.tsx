"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { DesktopIcon, MoonIcon, SunIcon } from "../icons";
import { Button } from "../ui/button";

const themes = [
  {
    name: "system",
    icon: <DesktopIcon className="size-4" />,
  },
  {
    name: "light",
    icon: <SunIcon className="size-4" />,
  },
  {
    name: "dark",
    icon: <MoonIcon className="size-4" />,
  },
];

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();

  if (!theme) return false;

  return (
    <div className="box-border flex w-fit grow-0 rounded-full border border-[#ABB7C4]">
      {themes.map(({ name, icon }) => (
        <Button
          key={name}
          variant="ghost"
          size="icon"
          className={cn(
            "h-auto w-auto rounded-full border border-transparent p-1 hover:bg-transparent hover:text-white",
            theme === name && "border-[#ABB7C4]"
          )}
          onClick={() => setTheme(name)}
        >
          {icon}
        </Button>
      ))}
    </div>
  );
}
