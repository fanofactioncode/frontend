import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

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

        <div className="flex items-center gap-2 rounded-[1.8em] border-2 border-black bg-background px-[0.6em] py-2">
          <Input
            placeholder="Your email"
            type="email"
            className="max-w-full border-none text-sm text-text focus-visible:ring-transparent sm:min-w-[300px]"
          />
          <Button className="rounded-[1.4em] px-6 py-6 text-sm">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
