import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

async function verifyEmail(token: string) {
  const url = "https://dev-api-v2.fanofaction.com/subscription/verify";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  };

  const response = await fetch(url, options);
  return response.json();
}

type Props = {
  params: {
    token: string;
  };
};

export default async function VerifyEmail({ params: { token } }: Props) {
  const data = await verifyEmail(token);

  return (
    <div className="container flex min-h-96 flex-col items-center justify-center gap-2 py-32">
      {(data.statusCode >= 200 && data.statusCode < 300) ||
      data.statusCode === 409 ? (
        <>
          <div className="relative w-36">
            <Image
              src="/assets/great-job-3d.webp"
              alt="Great job image"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
              priority
            />
          </div>
          <h1 className="text-center text-4xl font-semibold text-text">
            Great Job!
          </h1>
          <p className="max-w-96 text-center text-text-sub">
            Your email has been successfully verified. Stay connected with us on
            our social media channels to stay updated.
          </p>

          <Button className="mt-8" asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </>
      ) : (
        <>
          <div className="relative w-40">
            <Image
              src="/assets/hold-it-3d.webp"
              alt="Hold it image"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
              priority
            />
          </div>
          <h1 className="text-center text-4xl font-semibold text-text">
            Link Expired
          </h1>
          <p className="max-w-96 text-center text-text-sub">
            Your email verification link has expired. Please try again.
          </p>
        </>
      )}
    </div>
  );
}
