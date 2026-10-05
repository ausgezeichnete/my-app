import { getAllClients } from "./clientsApis";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { CLIENT_KEY } from "@/constants/queryKeys";
import { useEffect } from "react";
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
    queryFn: ({ pageParam }) =>
      getAllClients({
        pageParam,
        search,
      }).then((res) => res?.data?.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < 10) {
        return undefined;
      }
      return allPages.length + 1;
    },
    staleTime: 6000,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return {
    data,
    error,
    isPending,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
    isError,
    ref,
  };
};
