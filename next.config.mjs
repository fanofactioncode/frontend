import zod from "zod";
import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {};

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
