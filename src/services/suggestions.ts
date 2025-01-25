import env from "@/lib/env";
import { Pagination } from "@/types/pagination";
import { SuggestionMovie, SuggestionSearch } from "@/types/suggestions";

type PaginationProps = {
  search?: string;
  page?: number;
  limit?: number;
};

export async function getSuggestions(
  props: PaginationProps
): Promise<Pagination<SuggestionMovie>> {
  const url = new URL(env.NEXT_PUBLIC_API_URL + "/movie/suggestions");

  const { search, page, limit } = props;
  if (search) url.searchParams.append("search", search);
  if (page) url.searchParams.append("page", String(page));
  if (limit) url.searchParams.append("limit", String(limit));

  const response = await fetch(url.toString());
  return response.json();
}

export async function getSearchSuggestions(
  props: PaginationProps
): Promise<SuggestionSearch[]> {
  const url = new URL(env.NEXT_PUBLIC_API_URL + "/movie/search-suggestions");

  const { search, page, limit } = props;
  if (search) url.searchParams.append("search", search);
  if (page) url.searchParams.append("page", String(page));
  if (limit) url.searchParams.append("limit", String(limit));

  const response = await fetch(url.toString());
  return response.json();
}
