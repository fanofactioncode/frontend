"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { makeMovieRequest } from "@/actions/movie-requests";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { usePreferences } from "@/provider/preferences-provider";

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

export default function MovieRequestForm() {
  const { control, reset, setError, setValue, handleSubmit } =
    useForm<FormSchema>({
      resolver: zodResolver(schema),
    });

  const { preferences, setPreferences } = usePreferences();

  const [isMovieDialogOpen, setIsMovieDialogOpen] = useState<boolean>(false);
  const [isCityDialogOpen, setIsCityDialogOpen] = useState<boolean>(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] =
    useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    if (preferences.email) setValue("email", preferences.email);
  }, [preferences.email]);

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
    } catch (err) {
      console.log("Error : ", err);
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto mt-8 flex max-w-[890px] flex-col items-center gap-3 sm:mt-12 sm:flex-row">
          <Controller
            name="suggested_movie"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className="w-full flex-1">
                <Input
                  className="!h-[3.5rem] !rounded-xl !px-4"
                  placeholder="Pick you movie"
                  id="movie"
                  {...field}
                />
                <p
                  className={cn(
                    "invisible ms-1 text-sm text-red-400",
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
                  placeholder="Email Address"
                  type="email"
                  {...field}
                />
                <p
                  className={cn(
                    "invisible ms-1 text-sm text-red-400",
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
            <p className="invisible text-sm">Submit button</p>
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
