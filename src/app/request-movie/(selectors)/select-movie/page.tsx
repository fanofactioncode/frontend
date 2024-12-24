import { getSuggestions } from "@/services/suggestions";
import { getTrendingMovies } from "@/services/trending";

import { ListItem } from "./list-item";
import { Searchbox } from "./searchbox";
import { SubmitButton } from "./submit-button";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SelectMoviePage({ searchParams }: Props) {
  const params = await searchParams;
  const search = params.q;
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => query.append(key, item));
    } else if (value !== undefined) {
      query.append(key, value);
    }
  });

  const trendingMovies = await getTrendingMovies();
  let suggestions = null;
  if (search) suggestions = await getSuggestions({ search: search as string });

  return (
    <div className="flex h-screen flex-col">
      <div className="container sticky top-0 bg-background py-3">
        <Searchbox />
      </div>

      <div className="mt-2 flex-1 space-y-2">
        <h2 className="px-4 text-sm font-semibold text-text">
          We received this suggestions
        </h2>

        <div className="">
          {suggestions === null &&
            trendingMovies?.map(({ title }) => (
              <ListItem key={title} title={title} />
            ))}

          {suggestions?.data?.map(({ title }) => (
            <ListItem key={title} title={title} />
          ))}
        </div>
      </div>

      <div className="sticky bottom-0 bg-background p-4">
        <SubmitButton />
      </div>
    </div>
  );
}
