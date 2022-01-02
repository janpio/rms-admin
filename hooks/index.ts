import { baseURL } from "config";
import Tag from "models/Tag";
import Category from "models/Category";
import useSWR from "swr";
import { fetcher } from "utli";

export function useTag() {
  const { data, error } = useSWR<Tag[]>(baseURL + "/api/tags", fetcher);

  return {
    tags: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useCategory() {
  const { data, error } = useSWR<Category[]>(
    baseURL + "/api/categories",
    fetcher
  );

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
  };
}
