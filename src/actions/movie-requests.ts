"use server";

import { z } from "zod";

import env from "@/lib/env";

const schema = z.object({
  movie_id: z.coerce.number().int().min(0),
  city_id: z.coerce.number().int().min(0),
  email: z.string().email({ message: "Invalid email address" }),
  suggested_city: z.string().min(1, { message: "City is required" }),
  suggested_movie: z.string().min(1, { message: "Movie is required" }),
});

export async function makeMovieRequest(formData: FormData) {
  const validatedFields = schema.safeParse({
    movie_id: formData.get("movie_id"),
    city_id: formData.get("city_id"),
    email: formData.get("email"),
    suggested_city: formData.get("suggested_city"),
    suggested_movie: formData.get("suggested_movie"),
  });

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
      return { error: "Failed to send request" };
    }

    return { message: "Success" };
  } catch (error) {
    return { error: (error as Error).message || "Failed to send request" };
  }
}
