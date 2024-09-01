"use server";

import { revalidatePath } from "next/cache";

export async function createContact(formData: FormData) {
  console.log(formData.get("name"));
  console.log(formData.get("email"));
  console.log(formData.get("subject"));
  console.log(formData.get("message"));

  revalidatePath("/contact-us");
}
