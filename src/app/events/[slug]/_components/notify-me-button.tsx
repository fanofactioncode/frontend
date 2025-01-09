"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Player } from "@lottiefiles/react-lottie-player";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { makeMovieRequest } from "@/actions/movie-requests";
import { getPreferences } from "@/actions/preferences";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getCities } from "@/services/cities";
import { getShowDetails } from "@/services/shows";
import { City } from "@/types/cities";
import { Show } from "@/types/show.type";

const schema = z.object({
  email: z
    .string()
    .min(3, { message: "Please provide email address" })
    .email({ message: "Please provide email address" }),
  city: z.string().min(1, { message: "Please select a city" }),
});

type FormSchema = z.infer<typeof schema>;

export function NotifyMeButton() {
  const [cities, setCities] = useState<City[]>([]);
  const [show, setShow] = useState<Show | null>(null);
  const { slug } = useParams();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] =
    useState<boolean>(false);

  const { control, watch, setValue, setError, handleSubmit, reset } =
    useForm<FormSchema>({
      resolver: zodResolver(schema),
    });

  useEffect(() => {
    getCities().then((res) => setCities(res.allCities));
    getShowDetails(slug as string).then((res) => setShow(res));
  }, [slug]);

  useEffect(() => {
    if (cities) {
      getPreferences().then(({ city }) => {
        if (city) {
          const found = cities.find((c) => String(c.id) === city);
          if (found)
            setValue("city", found.name, {
              shouldDirty: true,
              shouldValidate: true,
            });
        }
      });
    }
  }, [cities, setValue]);

  const onSubmit = async (data: FormSchema) => {
    const { city } = data;
    const found = cities.find(
      (c) => c.name.toLowerCase() === city.toLowerCase()
    );

    if (!found) {
      return setError("city", {
        message: "City not found",
      });
    }
    setIsSubmitting(true);

    const { error } = await makeMovieRequest({
      city_id: Number(found.id),
      email: data.email,
      movie_id: Number(show?.movie_id),
    });

    setIsSubmitting(false);
    if (error) return setError("email", error);

    setIsSuccessDialogOpen(true);

    reset({ city: "", email: "" });
    setIsDialogOpen(false);
  };

  const query = watch("city");
  const filterCities = cities.filter((city) => {
    if (!query) return true;
    return city.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="mt-11 hidden bg-white text-primary hover:bg-white/65 dark:text-secondary sm:flex">
            Notify me
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[95%] rounded-2xl sm:max-w-[600px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <DialogHeader className="mb-4">
              <DialogTitle className="text-left">Notify Me</DialogTitle>
              <DialogDescription className="text-left">
                Don’t miss out! Enter your email to receive updates and
                reminders about this event. We’ll ensure you&apos;re the first
                to know about any important details or changes.
              </DialogDescription>
            </DialogHeader>

            <Controller
              control={control}
              name="email"
              render={({ field, fieldState: { error } }) => (
                <>
                  <Input type="email" placeholder="Your email" {...field} />
                  {error && <p className="text-red-500">{error.message}</p>}
                </>
              )}
            />

            <Controller
              control={control}
              name="city"
              render={({ field, fieldState: { error } }) => (
                <div className="relative mt-4">
                  <Input
                    placeholder="Enter city"
                    autoComplete="off"
                    onFocus={() => setOpen(true)}
                    {...field}
                  />
                  {error && <p className="text-red-500">{error.message}</p>}

                  {open && filterCities.length > 0 && (
                    <div className="absolute mt-1 max-h-52 w-full overflow-y-auto rounded-lg border bg-background">
                      {filterCities.map((city) => (
                        <button
                          type="button"
                          key={city.id}
                          className="flex w-full items-center space-x-2 px-4 py-2 text-text hover:bg-background/90"
                          onClick={() => {
                            setOpen(false);
                            setValue("city", city.name, {
                              shouldDirty: true,
                              shouldTouch: true,
                            });
                          }}
                        >
                          {city.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            />

            <DialogFooter className="mt-5">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving...." : "Save"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isSuccessDialogOpen} onOpenChange={setIsSuccessDialogOpen}>
        <DialogContent className="w-[90%] rounded-xl sm:max-w-[425px]">
          <DialogHeader className="flex flex-col items-center space-y-0 text-center">
            <Player
              src="/assets/lottie/success.json"
              loop={false}
              autoplay
              keepLastFrame
              className="size-40"
            />

            <DialogTitle>Thank you</DialogTitle>
            <DialogDescription className="mt-1 text-center text-sm text-text-sub">
              You have been added to our mailing list, and will be the first to
              know about any updates.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 flex items-center sm:justify-center">
            <DialogClose asChild>
              <Button className="w-56">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
