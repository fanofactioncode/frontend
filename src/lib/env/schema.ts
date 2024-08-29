import zod from "zod";

const envSchema = zod.object({
  NEXT_PUBLIC_VAR: zod.string(),
});

// Add all env variables here
// As `process.env` will be empty on the client side (Returns the object only on the server side)
// So add one by one to `envSchema` and `env`
export const env = envSchema.parse({
  NEXT_PUBLIC_VAR: process.env.NEXT_PUBLIC_VAR,
});
