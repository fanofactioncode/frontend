import env from "@/lib/env";
import { ShowDetails } from "@/types/show.type";

export async function getShowDetails(
  id: string | number
): Promise<ShowDetails> {
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/shows/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) {
    await res.text().then((text) => {
      console.log(JSON.parse(text));
    });
  }
  return res.json();
}
