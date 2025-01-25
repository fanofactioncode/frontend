"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { makeMovieRequest } from "@/actions/movie-requests";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useClickOutside } from "@/hooks/use-clickoutside";
import { cn } from "@/lib/utils";
import { usePreferences } from "@/provider/preferences-provider";
import { getSearchSuggestions } from "@/services/suggestions";
import { SuggestionSearch } from "@/types/suggestions";

import { CityDialog } from "./city-dialog";
import { MovieDialog } from "./movie-dialog";
import { SuccessModal } from "./success-modal";

const schema = z.object({
  suggested_movie: z
    .string({ required_error: "Please provide suggested movie" })
    .min(1, { message: "Please provide movie" }),
  email: z
    .string({ required_error: "Please provide email address" })
    .min(3, { message: "Please provide email address" })
    .email({ message: "Please provide email address" }),
});

type FormSchema = z.infer<typeof schema>;

function debounce(func: (...args: any[]) => void, delay: number) {
  let timer: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

export default function MovieRequestForm() {
  const { control, reset, setError, setValue, setFocus, handleSubmit } =
    useForm<FormSchema>({
      resolver: zodResolver(schema),
    });

  const { preferences, setPreferences } = usePreferences();

  const [isMovieDialogOpen, setIsMovieDialogOpen] = useState<boolean>(false);
  const [isCityDialogOpen, setIsCityDialogOpen] = useState<boolean>(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] =
    useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [searchedResults, setSearchedResults] = useState<SuggestionSearch[]>(
    []
  );
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: () => {
      setIsDropdownOpen(false);
    },
  });

  const debouncedSearch = debounce(async (term: string) => {
    if (!term) {
      setSearchedResults([]);
      setIsDropdownOpen(false);
      return;
    }

    const data = await getSearchSuggestions({ search: term });

    setSearchedResults(data);

    if (!isDropdownOpen && data.length > 0) {
      setIsDropdownOpen(true);
    }
  }, 300); // Adjust the debounce delay as needed

  useEffect(() => {
    if (preferences.email) setValue("email", preferences.email);
  }, [preferences.email, setValue]);

  async function onSubmit({ email, suggested_movie }: FormSchema) {
    const payload = {
      suggested_movie,
      email,
      city_id: preferences.city!.id,
    };

    setIsPending(true);

    try {
      const { error, message: _ } = await makeMovieRequest(payload);

      if (error) {
        if ((error as string).includes("email")) {
          return setError("email", error);
        } else if ((error as string).includes("suggested")) {
          return setError("suggested_movie", error);
        }
      }

      setPreferences({ ...preferences, email });
      setIsSuccessDialogOpen(true);
      reset({ email: "", suggested_movie: "" });
      setSearchedResults([]);
    } catch (err) {
      console.log("Error : ", err);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto mt-8 flex max-w-[890px] flex-col items-center sm:mt-12 sm:flex-row sm:gap-3">
          <Controller
            name="suggested_movie"
            control={control}
            render={({
              field: { onChange, ...field },
              fieldState: { error },
            }) => (
              <div ref={ref} className="relative w-full flex-1">
                <Input
                  className="!h-[3.5rem] !rounded-xl !px-4"
                  placeholder="Enter movie name"
                  id="movie"
                  autoComplete="off"
                  onChange={(e) => {
                    onChange(e);
                    debouncedSearch(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (!isDropdownOpen || searchedResults.length === 0) return;

                    switch (e.key) {
                      case "ArrowDown":
                        e.preventDefault();
                        setFocusedIndex((prev) => {
                          const nextIndex = Math.min(
                            prev + 1,
                            searchedResults.length - 1
                          );
                          document
                            .querySelector(`[data-index="${nextIndex}"]`)
                            ?.scrollIntoView({ block: "nearest" });
                          return nextIndex;
                        });
                        break;
                      case "ArrowUp":
                        e.preventDefault();
                        setFocusedIndex((prev) => {
                          const prevIndex = Math.max(prev - 1, 0);
                          document
                            .querySelector(`[data-index="${prevIndex}"]`)
                            ?.scrollIntoView({ block: "nearest" });
                          return prevIndex;
                        });
                        break;
                      case "Enter":
                        e.preventDefault();
                        if (focusedIndex >= 0) {
                          const selected = searchedResults[focusedIndex];
                          setValue("suggested_movie", selected.name);
                          setIsDropdownOpen(false);
                          setFocusedIndex(-1);
                          setFocus("email");
                        }
                        break;
                      case "Escape":
                        e.preventDefault();
                        setIsDropdownOpen(false);
                        setFocusedIndex(-1);
                        break;
                    }
                  }}
                  {...field}
                />

                <AnimatePresence>
                  {isDropdownOpen && searchedResults.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute mt-1 max-h-48 w-full overflow-auto rounded-lg border bg-background py-1 shadow-sm"
                    >
                      {searchedResults.map((result, index) => (
                        <button
                          type="button"
                          key={result.id}
                          tabIndex={-1}
                          data-index={index}
                          aria-label={result.name}
                          className={cn(
                            "flex w-full items-start justify-start p-4 text-text transition-colors duration-300 hover:bg-secondary/50",
                            focusedIndex === index && "bg-secondary/50"
                          )}
                          onClick={() => {
                            setValue("suggested_movie", result.name);
                            setIsDropdownOpen(false);
                            setFocus("email");
                          }}
                          onMouseEnter={() => setFocusedIndex(index)} // Optional for hover
                        >
                          {result.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <p
                  className={cn(
                    "invisible ms-1 text-sm text-red-400 sm:mt-2",
                    error && "visible"
                  )}
                >
                  {error ? error.message : "Movie Error"}
                </p>
              </div>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className="w-full flex-1">
                <Input
                  className="!h-[3.5rem] !rounded-xl !px-4"
                  placeholder="Enter email address"
                  type="email"
                  {...field}
                />
                <p
                  className={cn(
                    "invisible ms-1 text-sm text-red-400 sm:mt-2",
                    error && "visible"
                  )}
                >
                  {error ? error.message : "Email Error"}
                </p>
              </div>
            )}
          />

          <div className="w-full sm:w-fit">
            <Button
              type="submit"
              className="w-full px-12 sm:w-[150px]"
              disabled={isPending}
            >
              {isPending ? "Submitting..." : "Submit"}
            </Button>
            <p className="invisible mt-2 text-sm">Submit button</p>
          </div>
        </div>
      </form>

      <SuccessModal
        open={isSuccessDialogOpen}
        onOpenChange={setIsSuccessDialogOpen}
      />

      <MovieDialog
        open={isMovieDialogOpen}
        onOpenChange={setIsMovieDialogOpen}
        onNextClick={() => {
          setIsMovieDialogOpen(false);
          setIsCityDialogOpen(true);
        }}
      />

      <CityDialog open={isCityDialogOpen} onOpenChange={setIsCityDialogOpen} />
    </>
  );
}
