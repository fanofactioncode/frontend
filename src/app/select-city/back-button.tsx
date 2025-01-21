"use client";

import { useRouter } from "next/navigation";

import { ChevronBackwardIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button variant="ghost" size="icon" onClick={() => router.back()}>
      <ChevronBackwardIcon className="size-6 fill-text" />
    </Button>
  );
}
