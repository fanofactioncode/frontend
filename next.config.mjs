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
    ],
  },
};

export default withNextVideo(nextConfig);

(() => {
  // Validate the environment variables at build time
  zod
    .object({
      // NEXT_PUBLIC_VAR: zod.string(),
    })
    .parse(process.env);

  console.log("Hurray ! 🥳");
})();
