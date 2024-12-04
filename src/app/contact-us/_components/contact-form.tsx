"use client";

import { AlertCircle } from "lucide-react";
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { createContact } from "../_action/create-contact";

import { SubmitButton } from "./submit-button";

const initialState = {
  message: "",
};

export function ContactForm() {
  const [state, formAction] = useFormState(createContact, initialState);
  const formRef = createRef<HTMLFormElement>();

  useEffect(() => {
    if (formRef && state.message && state.message !== initialState.message) {
      formRef.current?.reset();
    }
  }, [state, formRef]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="my-8 space-y-4 sm:mx-auto sm:my-14 sm:max-w-[500px]"
    >
      {state?.error && (
        <Alert variant="destructive" className="rounded-2xl">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Invalid Input</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state?.message?.toLowerCase() === "success" && (
        <Alert variant="default" className="rounded-2xl">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your message has been sent successfully.
          </AlertDescription>
        </Alert>
      )}

      <Input name="name" placeholder="Name" />
      <Input name="email" placeholder="Email" />
      <Input name="subject" placeholder="Subject" />
      <Textarea name="message" placeholder="Message" />
      <div className="h-2" />
      <SubmitButton />

      <output aria-live="polite" className="sr-only">
        {state?.message}
      </output>
    </form>
  );
}
