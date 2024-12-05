"use server";

import { z } from "zod";

import env from "@/lib/env";

const schema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Invalid email address",
    })
    .min(1, { message: "Email is required" }),
});

export async function createSubscription(formData: FormData) {
  const validatedFields = schema.safeParse({
    email: formData.get("email"),
  });

  // Return early if validation fails
  if (!validatedFields.success) {
    return { error: validatedFields.error.errors[0].message };
  }

  try {
    // Call the api here
    const response = await fetch(env.NEXT_PUBLIC_API_URL + "/subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: validatedFields.data.email,
      }),
    });

    if (!response.ok) {
      if (response.status === 409) {
        return { error: "You are already subscribed" };
      }

      return { error: "Failed to subscribe" };
    }

    return { message: "Success" };
  } catch (error) {
    return { error: "Failed to subscribe" };
  }
}
