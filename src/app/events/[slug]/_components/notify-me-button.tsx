"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronDown } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { makeMovieRequest } from "@/actions/movie-requests";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { getCities } from "@/services/cities";
import { getShowDetails } from "@/services/shows";
import { City } from "@/types/cities";
import { Show } from "@/types/show.type";

const schema = z.object({
  email: z
    .string()
    .min(3, { message: "Please provide email address" })
    .email({ message: "Please provide email address" }),
  cityId: z.string().min(1, { message: "Please select a city" }),
});

type FormSchema = z.infer<typeof schema>;

export function NotifyMeButton() {
  const [cities, setCities] = useState<City[]>([]);
  const [show, setShow] = useState<Show | null>(null);
  const { slug } = useParams();
  const [open, setOpen] = useState(false);

  const {
    getValues,
    formState: { errors },
    register,
    setError,
    setValue,
    handleSubmit,
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    getCities().then((res) => setCities(res.allCities));
    getShowDetails(slug as string).then((res) => setShow(res));
  }, [slug]);

  const onSubmit = async (data: FormSchema) => {
    const { error } = await makeMovieRequest({
      city_id: Number(data.cityId),
      email: data.email,
      movie_id: Number(show?.movie_id),
    });

    if (error) return setError("email", error);

    reset({ cityId: "", email: "" });
  };

  const cityId = getValues("cityId");

  return (
    <Dialog modal={false}>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              dignissimos minus saepe natus blanditiis nisi molestias velit
              molestiae recusandae suscipit!
            </DialogDescription>
          </DialogHeader>

          <Input type="email" placeholder="Your email" {...register("email")} />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                aria-expanded={open}
                className="mt-4 w-full justify-between !py-5"
              >
                {cityId
                  ? cities.find((city) => String(city.id) === cityId)?.name
                  : "Select your city..."}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              alignOffset={-55}
              className="max-w-[90%] rounded-2xl p-0 sm:w-[calc(600px-1rem)]"
            >
              <Command>
                <CommandInput placeholder="Search city name" />
                <CommandList>
                  <CommandEmpty>No city found.</CommandEmpty>
                  <CommandGroup>
                    {cities.map((city) => (
                      <CommandItem
                        key={city.name}
                        value={String(city.name)}
                        onSelect={(currentValue) => {
                          const foundCity = cities.find(
                            (c) => c.name === currentValue
                          );
                          if (foundCity) {
                            setValue("cityId", String(foundCity.id));
                            setOpen(false);
                          }
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            cityId === String(city.id)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {city.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <DialogFooter className="mt-5">
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
