"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

export function SubmitButton() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit() {
    replace(`/request-movie?${searchParams.toString()}`);
  }

  return (
    <Button onClick={handleSubmit} className="w-full">
      Next
    </Button>
  );
}
