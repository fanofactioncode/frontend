"use client";

import dynamic from "next/dynamic";
import { createRef, useState } from "react";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

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

  const [isPending, setIsPending] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  function resetForm() {
    formRef.current?.reset();
    setError(null);
  }

  async function onSubmit(data: FormData) {
    setIsPending(true);

    const { error, message } = await createSubscription(data);

    setIsPending(false);

    if (error) {
      setError(error);
    }

    if (message) {
      resetForm();
      setIsDialogOpen(true);
    }
  }

  console.log("isPending = ", isPending);

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[90%] rounded-xl sm:max-w-[425px]">
          <DialogHeader className="flex flex-col items-center space-y-0 text-center">
            <Player
              src="/assets/lottie/newslatter.json"
              autoplay
              keepLastFrame
              className="size-40"
            />

            <DialogTitle>You&apos;re Almost In!</DialogTitle>
            <DialogDescription className="mt-1 text-center text-sm text-text-sub">
              Thanks for signing up! We&apos;ve sent a confirmation email to
              your inbox. Please click the link in the email to confirm your
              subscription and start receiving exclusive updates and movie
              release alerts.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 flex items-center sm:justify-center">
            <DialogClose asChild>
              <Button className="w-56">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <form
        ref={formRef}
        onSubmit={async (e) => {
          e.preventDefault(); // Prevent page reload
          const formData = new FormData(e.currentTarget); // Collect form data
          await onSubmit(formData); // Call your async function
        }}
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
          className="flex items-center gap-2 rounded-[1.4em] px-6 py-6 text-sm"
          aria-label="Subscribe"
          disabled={isPending}
        >
          Subscribe
          {isPending && (
            <svg
              aria-hidden="true"
              className="size-5 animate-spin fill-primary text-primary-foreground"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          )}
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
