import { MetadataRoute } from "next";

import { getShows } from "@/services/shows";

export async function generateSitemaps() {
  const { data: shows } = await getShows();
  return shows.map((s) => ({ id: s.id }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: shows } = await getShows();

  return shows.map((show) => ({
    url: "https://fanofaction.com/events/" + show.slug,
    lastModified: new Date(),
    changeFrequency: "daily",
    images: [
      show.movie.cover_poster_url ?? "",
      show.movie.logo_url ?? "",
      show.movie.poster_url ?? "",
    ],
    priority: 0.5,
    videos: [
      {
        description: `${show.movie.title}'s trailer`,
        title: `${show.movie.title}'s trailer`,
        thumbnail_loc: show.movie.trailer_url ?? "",
      },
    ],
  }));
}
