"use server";

import { z } from "zod";

import env from "@/lib/env";

const schema = z.object({
  name: z
    .string({
      invalid_type_error: "Name must be a string",
    })
    .min(1, { message: "Name is required" }),
  email: z
    .string({
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Invalid email address",
    })
    .min(1, { message: "Email is required" }),
  subject: z.string({
    invalid_type_error: "Subject must be a string",
  }),
  message: z
    .string({
      invalid_type_error: "Message must be a string",
    })
    .min(1, { message: "Message is required" }),
});

export async function createContact(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  // Return early if validation fails
  if (!validatedFields.success) {
    return { error: validatedFields.error.errors[0].message };
  }

  try {
    // Call the api here
    const response = await fetch(
      env.NEXT_PUBLIC_API_URL + "/contact-requests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedFields.data),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return { message: "Success" };
  } catch (error) {
    return { error: (error as Error).message };
  }
}
