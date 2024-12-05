"use client";

import { createRef, useState } from "react";

import { createSubscription } from "@/actions/subscriptions";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";

export function SubscriptionForm() {
  const formRef = createRef<HTMLFormElement>();

  const [pending, setPending] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  function resetForm() {
    formRef.current?.reset();
    setError(null);
  }

  async function onSubmit(data: FormData) {
    setPending(true);

    const { error, message } = await createSubscription(data);
    setPending(false);

    if (error) {
      setError(error);
    }

    if (message) {
      resetForm();
      setIsDialogOpen(true);
    }
  }

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Success!</DialogTitle>
            <DialogDescription>
              You have successfully subscribed
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <form
        ref={formRef}
        action={onSubmit}
        className={cn(
          "flex items-center gap-2 rounded-[1.8em] border-2 border-black bg-background px-[0.6em] py-2",
          error && "border-red-500"
        )}
      >
        <Input
          placeholder="Your email"
          type="email"
          name="email"
          autoComplete="email"
          onChange={() => setError(null)}
          className="max-w-full border-none text-sm text-text ring-transparent transition-none duration-0 focus-visible:ring-0 sm:min-w-[300px]"
        />

        <output aria-live="polite" className="sr-only">
          {error}
        </output>
        <Button
          className="rounded-[1.4em] px-6 py-6 text-sm"
          aria-label="Subscribe"
          disabled={pending}
        >
          Subscribe
        </Button>
      </form>
      <div
        role="alert"
        className={cn(
          "-mt-4 flex items-center justify-center rounded-lg bg-red-500/50 px-2 py-1",
          !error && "invisible"
        )}
      >
        <p
          aria-label={error ?? "Error"}
          aria-live="polite"
          className="text-sm text-text"
        >
          {error ?? "Something went wrong"}
        </p>
      </div>
    </>
  );
}
