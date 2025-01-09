"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { makeMovieRequest } from "@/actions/movie-requests";
import { getPreferences } from "@/actions/preferences";
import { Button } from "@/components/ui/button";
import {
  Dialog,
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

export function NotifyOrBookingButton() {
  const { slug } = useParams();

  const [cities, setCities] = useState<City[]>([]);
  const [show, setShow] = useState<Show | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const { control, setValue, setError, handleSubmit, reset } =
    useForm<FormSchema>({
      resolver: zodResolver(schema),
    });

  useEffect(() => {
    getCities().then((res) => setCities(res.allCities));
    getShowDetails(slug as string).then((res) => setShow(res));
  }, [slug]);

  useEffect(() => {
    getPreferences().then(({ city }) => {
      if (city && cities) {
        const found = cities.find((c) => String(c.id) === city);
        if (found) setValue("city", found.name);
      }
    });
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

    reset({ city: "", email: "" });
    setIsDialogOpen(false);
  };

  const filterCities = cities.filter((city) => {
    if (!query) return true;
    return city.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="sticky bottom-0 border-b border-t bg-background p-4 sm:hidden">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="w-full">Notify me</Button>
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
              render={({
                field: { onChange, ...field },
                fieldState: { error },
              }) => (
                <div className="relative mt-4">
                  <Input
                    placeholder="Enter city"
                    autoComplete="off"
                    {...field}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      onChange(e.target.value);
                      setOpen(true);
                    }}
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
                            setValue("city", city.name);
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
    </div>
  );
}
