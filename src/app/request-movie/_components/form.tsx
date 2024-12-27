"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { makeMovieRequest } from "@/actions/movie-requests";
import { MapIcon, MovieIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useScreenWidth } from "@/hooks/use-screen-width";
import { cn } from "@/lib/utils";
import { getCities } from "@/services/cities";
import { CityResponse } from "@/types/cities";

import { CityDialog } from "./city-dialog";
import Divider from "./divider";
import {
  Picker,
  PickerDescription,
  PickerDownIcon,
  PickerHeader,
  PickerTitle,
} from "./item-picker";
import { MovieDialog } from "./movie-dialog";
import { SuccessModal } from "./success-modal";

const schema = z.object({
  email: z
    .string()
    .min(3, { message: "Please provide email address" })
    .email({ message: "Please provide email address" }),
});

type FormSchema = z.infer<typeof schema>;

export default function MovieRequestForm() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();
  const screenWidth = useScreenWidth();
  const searchParams = useSearchParams();

  const params = Object.fromEntries(searchParams);
  const movie = params.movie;
  const city = params.city;

  const [isMovieDialogOpen, setIsMovieDialogOpen] = useState<boolean>(false);
  const [isCityDialogOpen, setIsCityDialogOpen] = useState<boolean>(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] =
    useState<boolean>(false);
  const [isSubscriptionDialogOpen, setIsSubscriptionDialogOpen] =
    useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [cities, setCities] = useState<CityResponse>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    getCities().then(setCities);
  }, []);

  useEffect(() => {
    router.prefetch("/request-movie/select-movie");
    router.prefetch("/request-movie/select-city");
  }, [router]);

  function handleMovieDialogPicker() {
    if (screenWidth >= 760) {
      setIsMovieDialogOpen(true);
    } else {
      router.push("/request-movie/select-movie?" + searchParams.toString());
    }
  }

  function handleCityDialogPicker() {
    if (screenWidth >= 760) {
      setIsCityDialogOpen(true);
    } else {
      router.push("/request-movie/select-city?" + searchParams.toString());
    }
  }

  function getSelectedCityId() {
    return cities?.allCities.find(
      (city) => city.name === searchParams.get("city")
    )?.id;
  }

  async function handleFormSubmit({ email }: FormSchema) {
    const cityId = getSelectedCityId();
    if (!cityId) return setError("Please select a city");

    const payload = {
      suggested_movie: movie,
      city_id: cityId,
      email,
    };

    try {
      const { error, message: _ } = await makeMovieRequest(payload);

      if (error) return setError(error);

      setIsSubscriptionDialogOpen(false);
      setIsSuccessDialogOpen(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsPending(false);
    }
  }

  useEffect(() => {
    if (movie || city) {
      setError(undefined);
    }
  }, [movie, city]);

  return (
    <>
      <form
        method="POST"
        action={() => {
          if (getSelectedCityId() && movie) setIsSubscriptionDialogOpen(true);
        }}
      >
        <div
          className={cn(
            "mx-auto mt-8 flex max-w-[890px] flex-col overflow-hidden rounded-2xl border border-secondary dark:border-primary sm:mt-12 sm:flex-row sm:items-center sm:gap-6",
            error && "!border-red-500"
          )}
        >
          <Picker onClick={handleMovieDialogPicker}>
            <PickerHeader>
              <MovieIcon size={18} color="#B9F18C" />
              <PickerTitle>Movie</PickerTitle>
              <PickerDownIcon />
            </PickerHeader>
            <PickerDescription>
              {movie ?? "Which movie you want to see ?"}
            </PickerDescription>
          </Picker>

          <div className="px-6 py-0 sm:px-0 sm:py-6">
            <Divider />
          </div>

          <Picker onClick={handleCityDialogPicker}>
            <PickerHeader>
              <MapIcon size={18} color="#B9F18C" />
              <PickerTitle>Location</PickerTitle>
              <PickerDownIcon />
            </PickerHeader>
            <PickerDescription>
              {city ?? "Where do you want to watch ?"}
            </PickerDescription>
          </Picker>

          <div className="hidden p-6 ps-0 sm:flex">
            <Button
              type="submit"
              className="w-[150px] px-12"
              disabled={isPending}
            >
              {isPending ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </div>

        <p className="mx-auto max-w-[890px] text-left text-sm text-red-500">
          {error}
        </p>

        <Button
          type="submit"
          className="mt-8 w-full sm:hidden"
          disabled={isPending}
        >
          {isPending ? "Requesting..." : "Request"}
        </Button>
      </form>

      <Dialog
        open={isSubscriptionDialogOpen}
        onOpenChange={setIsSubscriptionDialogOpen}
      >
        <DialogContent className="w-[90%] rounded-2xl sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-text">
              Subscribe to our newsletter
            </DialogTitle>
            <DialogDescription>
              Get notified when we release your suggested movie
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
            <Input
              placeholder="johndoe@mail.com"
              className="!rounded-2xl"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-400">{errors.email.message}</p>
            )}

            <DialogFooter>
              <Button type="submit" className="px-8">
                Subscribe
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

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
