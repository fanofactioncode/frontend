import zod from "zod";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

(() => {
  // Validate the environment variables at build time
  zod
    .object({
      // NEXT_PUBLIC_VAR: zod.string(),
    })
    .parse(process.env);

  console.log("Hurray ! 🥳");
})();
