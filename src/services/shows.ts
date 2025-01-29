import env from "@/lib/env";
import { Pagination } from "@/types/pagination";
import { Show, ShowDetails } from "@/types/show.type";

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

export async function getShows(): Promise<Pagination<Show>> {
  const url = env.NEXT_PUBLIC_API_URL + "/shows";
  const options = {
    headers: {
      accept: "application/json",
    },
    next: { revalidate: 0 },
  };

  const resonse = await fetch(url, options);
  return resonse.json();
}
