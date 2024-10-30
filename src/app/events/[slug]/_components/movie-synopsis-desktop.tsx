import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PlayIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function MovieSysnopsisDesktop() {
  return (
    <div className="container hidden py-5 sm:block">
      <div className="relative h-[600px] overflow-hidden rounded-3xl">
        <Image
          src="/assets/planet-of-the-apes.png"
          alt="Platnet of the Apes"
          className="-z-10 h-full w-full object-cover"
          fill
        />
        <div className="z-50 flex h-full items-start gap-[1.875rem] bg-gradient-to-r from-primary from-35% via-primary/80 via-75% to-transparent to-100% p-[3.75rem] dark:from-secondary dark:via-secondary/80 sm:w-full md:w-9/12">
          <div className="relative w-52 shrink-0 overflow-hidden rounded-xl">
            <Image
              src="/assets/planet-of-the-apes-potrate.png"
              alt="Planet of the Apes"
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto w-full"
            />
            <PlayIcon
              color="white"
              className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="mt-4 space-y-5">
            <h1 className="text-3xl font-bold text-white">
              The Ministry of Ungentlemanly Warfare
            </h1>
            <p className="text-sm text-white">
              British Prime Minister Winston Churchill and a group of military
              officials hatch a daring plan to neutralize Hitler&lsquo;s fleet
              of German U-boats during World War II. Made up of a motley crew of
              rogues and mavericks, the top-secret combat unit uses
              unconventional techniques to battle the Nazis and change the
              course of the war.
            </p>
            <p className="text-sm text-white">Action, Adventure, Comedy</p>
            <div className="flex items-center gap-3">
              <Badge className="border-none bg-[#ABB7C4] dark:bg-[#ABB7C4] dark:text-black">
                2 hr 15 min
              </Badge>
              <Badge className="flex items-center gap-2 border-none bg-[#ABB7C4] dark:bg-[#ABB7C4] dark:text-black">
                7.5
                <StarIcon size={14} />
              </Badge>
            </div>

            <div></div>
            <Link href={`/booking/the-ministry-of-ungentlemanly-warfare`}>
              <Button className="mt-11 bg-white text-primary hover:bg-white/65 dark:text-secondary">
                Book Tickets
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
