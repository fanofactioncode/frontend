import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

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
import { useDebounce } from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";
import { getSuggestions } from "@/services/suggestions";
import { SuggestionMovie } from "@/types/suggestions";

import SearchInput from "../(selectors)/_components/search-input";

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

  const [trendingMovies, setTrendingMovies] = useState<SuggestionMovie[]>([]);
  const [query, setQuery] = useState<string>();
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    getSuggestions({ search: debouncedQuery }).then(({ data }) =>
      setTrendingMovies(data)
    );
  }, [debouncedQuery]);

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

        <SearchInput
          value={query}
          placeholder="Search your movie"
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="mt-2 flex-1 space-y-2">
          <h2 className="text-lg font-semibold text-text">Top Searched</h2>

          <ScrollArea className="max-h-[300px]">
            {trendingMovies?.map(({ title: name, id }, i) => (
              <button
                key={id}
                className={cn(
                  "flex w-full items-center justify-between border-b border-secondary py-3 text-text transition-colors duration-300 focus-within:bg-foreground/5 focus-within:outline-none",
                  i === 0 && ""
                )}
                aria-label={name}
                onClick={() => handleMovieSelect(name)}
              >
                <span>{name}</span>

                <div className="flex items-center gap-1">
                  {/* <span>{views}</span> */}
                  <TrendingIcon size={20} className="fill-primary" />
                </div>
              </button>
            ))}

            {trendingMovies?.length === 0 && (
              <p className="py-3 text-center text-sm text-text-sub">
                No movies found
              </p>
            )}
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
