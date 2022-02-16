import { baseURL } from "config";
import Tag from "models/Tag";
import Category from "models/Category";
import useSWR from "swr";
import { fetcher } from "utli";
type ReactSelectOption = {
  label: string;
  value: number;
};
export function useTag(isReactSelect: boolean = false): {
  data: Tag[] | ReactSelectOption[] | undefined;
  isLoading: boolean;
  isError: any;
} {
  const { data, error } = useSWR<Tag[]>(baseURL + "/api/tags", fetcher);

  return {
    data: isReactSelect
      ? data?.map((t) => ({ label: t.name, value: t.id }))
      : data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useCategory(isReactSelect: boolean = false) {
  const { data, error } = useSWR<Category[]>(
    baseURL + "/api/categories",
    fetcher
  );

  return {
    data: isReactSelect
      ? data?.map((t) => ({ label: t.name, value: t.id }))
      : data,
    isLoading: !error && !data,
    isError: error,
  };
}
