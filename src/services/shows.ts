import { ShowDetails } from "@/types/show.type";

export async function getShowDetails(
  id: string | number
): Promise<ShowDetails> {
  const res = await fetch(`https://dev-api-v2.fanofaction.com/shows/${id}`);
  if (!res.ok) {
    await res.text().then((text) => {
      console.log(JSON.parse(text));
    });
  }
  return res.json();
}
