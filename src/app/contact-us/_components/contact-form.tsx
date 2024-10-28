import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { createContact } from "../_action/create-contact";

export function ContactForm() {
  return (
    <form action={createContact} method="post">
      <div className="my-8 space-y-4 sm:mx-auto sm:my-14 sm:max-w-[500px]">
        <Input name="name" placeholder="Name" />
        <Input name="email" placeholder="Email" />
        <Input name="subject" placeholder="Subject" />
        <Textarea name="message" placeholder="Message" />
      </div>
      <div className="w-full sm:mx-auto sm:max-w-[500px]">
        <Button type="submit" className="w-full">
          Leave us message
        </Button>
      </div>
    </form>
  );
}
