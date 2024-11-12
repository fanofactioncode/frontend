import { StarIcon } from "lucide-react";
import Image from "next/image";

import { PlayIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";

export function BookingMovieDetail() {
  return (
    <main className="container py-2 md:py-8 md:pb-0">
      <div className="hidden md:flex md:items-center md:gap-4">
        <div className="w-1/2 space-y-3">
          <h1 className="text-4xl font-extrabold text-text">
            The Ministry of Ungentlemanly Warfare
          </h1>
          <p className="text-sm text-text">Action, Adventure, Comedy</p>
          <div className="flex items-center gap-2">
            <Badge>2 hr 15 min</Badge>
            <Badge className="flex items-center gap-2">
              7.8 <StarIcon size={14} />
            </Badge>
          </div>
        </div>
        <div className="w-1/2">
          <div className="relative h-[250px] w-full overflow-hidden rounded-[1.25rem]">
            <Image
              src="/video-thumbnail.jpg"
              alt="Fan of action intro video thumbnail"
              fill
              className="-z-10 h-full w-full object-cover"
            />
            <div className="z-40 h-full w-full bg-primary/60 dark:bg-secondary/65" />
            <PlayIcon
              color="white"
              className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>

      <div className="relative h-[120px] overflow-hidden rounded-2xl md:hidden">
        <Image
          src="/assets/bad-boys.png"
          alt="Bad boys"
          fill
          sizes="100vw"
          className="z-0 h-auto w-full"
          objectFit="cover"
        />

        <div className="absolute bottom-0 z-10 flex h-full w-full flex-col justify-end bg-gradient-to-t from-[#102132] to-transparent p-3">
          <h1 className="text-sm font-bold text-white">
            The Ministry of Ungentlemanly Warfare
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium text-white">A</p>
            <span className="size-1.5 rounded-full bg-white"></span>
            <p className="text-xs font-medium text-white">2 hrs 8 mins</p>
            <span className="size-1.5 rounded-full bg-white"></span>
            <p className="text-xs font-medium text-white">
              Action, Adventure, Comedy
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
