import env from "@/lib/env";
import { ShowDetails } from "@/types/show.type";

export async function getShowDetails(slug: string): Promise<ShowDetails> {
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/shows/${slug}`, {
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
