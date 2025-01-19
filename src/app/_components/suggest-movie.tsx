import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function SuggestMovie() {
  return (
    <section className="container space-y-9 py-16">
      <div className="flex flex-col items-center justify-center gap-2">
        <Badge>Share your favorite</Badge>
        <h2 className="text-center text-4xl font-bold text-text">
          Request Your Favorite Movie for a<br />
          Big-Screen Rerelease
        </h2>
        <p className="text-center text-sm text-text-sub">
          Missed the chance to watch your favorite movie in theaters? Or just
          want to relive the experience? Request your movie now and make your
          big-screen wish come true!
        </p>
      </div>

      <div className="flex items-center justify-center">
        <Button asChild>
          <Link href="/request-movie">Request Movie</Link>
        </Button>
      </div>
    </section>
  );
}
