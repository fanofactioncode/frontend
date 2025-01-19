"use client";

import { useEffect, useState } from "react";

import { CityPickerDialog } from "@/components/common/city-picker-dialog";
import { usePreferences } from "@/provider/preferences-provider";

export function CityPicker() {
  const { preferences, setPreferences } = usePreferences();

  const [isCityPickerOpen, setIsCityPickerOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsCityPickerOpen(preferences.city === null);
  }, [preferences]);

  return (
    <CityPickerDialog
      open={isCityPickerOpen}
      onOpenChange={setIsCityPickerOpen}
      onSelectCity={(city) => setPreferences({ ...preferences, city })}
    />
  );
}
