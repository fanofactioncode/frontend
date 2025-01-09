import { withNextVideo } from "next-video/process";
import zod from "zod";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.themoviedb.org",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default withNextVideo(nextConfig);

(() => {
  // Validate the environment variables at build time
  zod
    .object({
      // NEXT_PUBLIC_VAR: zod.string(),
      // NEXT_PUBLIC_API_URL: zod.string().url(),
    })
    .parse(process.env);

  console.log("Hurray ! 🥳");
})();
