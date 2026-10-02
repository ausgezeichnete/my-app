export interface pageParams {
  page: number;
  limit?: number;
}

export interface ApiResponse {
  status: number;
  message: string | null;
  data: T;
}

export interface AppInfinteQueryResult extends Pick<
  UseInfiniteQueryResult,
  | "data"
  | "error"
  | "isPending"
  | "hasNextPage"
  | "fetchNextPage"
  | "isFetchingNextPage"
  | "isRefetching"
  | "isError"
> {
  ref: (node?: Element | null) => void;
}

export interface Ipagination {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  is_pagination: boolean;
}
