import { MetadataRoute } from "next";

import { FOA_INTRO_VIDEO_URL } from "@/config/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fanofaction.com/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://fanofaction.com/refund-and-cancellation-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://fanofaction.com/terms-and-conditions",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://fanofaction.com/about-us",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
      images: ["https://www.fanofaction.com/assets/video-thumbnail.png"],
      videos: [
        {
          description: "About fanofaction",
          thumbnail_loc:
            "https://www.fanofaction.com/assets/video-thumbnail.png",
          title: "About FanOfAction",
          content_loc: FOA_INTRO_VIDEO_URL,
          family_friendly: "yes",
        },
      ],
    },
    {
      url: "https://fanofaction.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://fanofaction.com/request-movie",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://fanofaction.com/events",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://fanofaction.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
