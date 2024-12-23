"use server";

import { z } from "zod";

import env from "@/lib/env";

const schema = z.object({
  suggested_movie: z
    .string({ message: "Please select a movie" })
    .min(2, { message: "Please select a movie, min" }),
  city_id: z.coerce
    .number({ invalid_type_error: "Please select a city" })
    .int({ message: "Please select a city" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Please enter your email" }),
});

type MovieRequestPayload = {
  suggested_movie: string;
  city_id: number;
  email: string;
};

export async function makeMovieRequest(payload: MovieRequestPayload) {
  const validatedFields = schema.safeParse(payload);

  // Return early if validation fails
  if (!validatedFields.success) {
    return { error: validatedFields.error.errors[0].message };
  }

  try {
    // Call the api here
    const response = await fetch(env.NEXT_PUBLIC_API_URL + "/movie-requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    });

    if (!response.ok) {
      const text = await response.text();
      const obj = JSON.parse(text);

      return { error: obj.message || "Failed to send request" };
    }

    return { message: "Success" };
  } catch (error) {
    return { error: (error as Error).message || "Failed to send request" };
  }
}
