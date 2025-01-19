"use client";

import { ChevronDown, Globe } from "lucide-react";
import { useState } from "react";

import { usePreferences } from "@/provider/preferences-provider";

import { Button } from "../ui/button";

import { CityPickerDialog } from "./city-picker-dialog";

export function CityPickerButton() {
  const { preferences, setPreferences } = usePreferences();

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        size="sm"
        variant="ghost"
        className="gap-2 px-2 text-text"
        onClick={() => setOpen(true)}
      >
        <Globe className="size-5" />
        {preferences.city !== null ? preferences.city.name : "Pick City"}
        <ChevronDown className="size-4" />
      </Button>

      <CityPickerDialog
        open={open}
        onOpenChange={setOpen}
        onSelectCity={(city) => setPreferences({ ...preferences, city })}
      />
    </>
  );
}
