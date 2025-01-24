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
import { getSearchSuggestions } from "@/services/suggestions";
import { getTrendingMovies } from "@/services/trending";
import { SuggestionSearch } from "@/types/suggestions";
import { TrendingMovie } from "@/types/trending";

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

  const [movies, setMovies] = useState<TrendingMovie[]>([]);
  const [searchedResults, setSearchedResults] = useState<SuggestionSearch[]>(
    []
  );
  const [query, setQuery] = useState<string>();
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery) return;

    getSearchSuggestions({ search: debouncedQuery }).then((data) => {
      if (!data) return;
      setSearchedResults(data);
    });
  }, [debouncedQuery]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  function handleMovieSelect(movie: string) {
    const params = new URLSearchParams(searchParams);
    params.set("movie", movie);
    replace(`${pathname}?${params.toString()}`);

    onNextClick();
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
          {!debouncedQuery && (
            <>
              <h2 className="text-lg font-semibold text-text">Top Searched</h2>

              <ScrollArea className="max-h-[300px]">
                {movies?.map(({ title: name, id }, i) => (
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
              </ScrollArea>
            </>
          )}

          {debouncedQuery && (
            <>
              <h2 className="text-lg font-semibold text-text">
                Maching Results
              </h2>

              <ScrollArea className="max-h-[300px]">
                {searchedResults?.map(({ id, name }) => (
                  <button
                    key={id}
                    className="flex w-full items-center justify-between border-b border-secondary py-3 text-text transition-colors duration-300 focus-within:bg-foreground/5 focus-within:outline-none"
                    onClick={() => handleMovieSelect(name)}
                    aria-label={name}
                    aria-labelledby={name}
                  >
                    {name}
                  </button>
                ))}

                {searchedResults?.length === 0 && (
                  <p className="py-3 text-center text-sm text-text-sub">
                    No movies found
                  </p>
                )}
              </ScrollArea>
            </>
          )}
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
