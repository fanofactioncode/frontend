import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { TrendingIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import SearchInput from "../(selectors)/_components/search-input";

const trendingMovies = [
  {
    name: "Andaj Apna Apna",
    views: "22k",
  },
  {
    name: "3 Idiots",
    views: "22k",
  },
  {
    name: "The Dark Knight",
    views: "22k",
  },
  {
    name: "Pan's Labyrinth",
    views: "22k",
  },
];

export interface MovieDialogProps {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  onNextClick: () => void;
}

export function MovieDialog({
  open,
  onOpenChange,
  onNextClick,
}: MovieDialogProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleMovieSelect(movie: string) {
    const params = new URLSearchParams(searchParams);
    params.set("movie", movie);
    replace(`${pathname}?${params.toString()}`);

    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent aria-describedby="movie-dialog">
        <DialogHeader>
          <DialogTitle>Suggest a movie</DialogTitle>
        </DialogHeader>

        <SearchInput placeholder="Search your movie" />

        <div className="mt-2 flex-1 space-y-2">
          <h2 className="text-lg font-semibold text-text">Top Searched</h2>

          <ScrollArea className="max-h-[300px]">
            {trendingMovies.map(({ name, views }, i) => (
              <button
                key={name}
                className={cn(
                  "flex w-full items-center justify-between border-b border-secondary py-3 text-text transition-colors duration-300 focus-within:bg-foreground/5 focus-within:outline-none",
                  i === 0 && ""
                )}
                aria-label={name}
                onClick={() => handleMovieSelect(name)}
              >
                <span>{name}</span>

                <div className="flex items-center gap-1">
                  <span>{views}</span>
                  <TrendingIcon size={20} className="fill-primary" />
                </div>
              </button>
            ))}
          </ScrollArea>
        </div>

        <DialogFooter>
          <Button
            className="px-8"
            onClick={() => {
              onOpenChange(false);
              onNextClick();
            }}
          >
            Next
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
