"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ChevronBackwardIcon } from "@/components/icons";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button variant="ghost" size="icon" onClick={() => router.back()}>
      <ChevronBackwardIcon className="size-6 fill-text" />
    </Button>
  );
}
