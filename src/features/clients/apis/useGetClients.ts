import { CLIENT_KEY } from "@/constants/queryKeys";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetClients = (search: string) => {
  const {
    data,
    error,
    isPending,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
    isError,
  } = useInfiniteQuery({
    refetchOnWindowFocus: false,
    queryKey: [CLIENT_KEY, search],
    queryFn: ({pageParam}=> getAllClients)
  });
};
