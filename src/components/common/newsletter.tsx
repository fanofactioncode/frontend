import { Badge } from "../ui/badge";

import { SubscriptionForm } from "./subscription-form";

export default function Newsletter() {
  return (
    <div className="bg-secondary py-16 sm:py-[6.5rem]">
      <div className="container flex flex-col items-center justify-center gap-5 sm:max-w-[700px]">
        <Badge>Stay Connected</Badge>

        <h2 className="text-center text-4xl font-bold leading-tight text-text sm:text-6xl sm:leading-none">
          Bring sanity back to your website
        </h2>
        <p className="text-center text-sm text-text sm:text-base">
          It&apos;s free to sign up on our newsletter
        </p>

        <SubscriptionForm />
      </div>
    </div>
  );
}
