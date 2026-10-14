import { getAllClients } from "./clientsApis";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { CLIENT_KEY } from "@/constants/queryKeys";
import { useEffect } from "react";
// useGetClients is a custom hook that uses the useInfiniteQuery hook from react-query to fetch clients data from the API. It takes a search string as an argument and returns the data, error, and other properties related to the query.
export const useGetClients = (search: string) => {
  const {
    data, // data is the data returned from the API call
    error, // error is the error returned from the API call
    isPending, // isPending is a boolean that indicates whether the API call is in progress or not
    hasNextPage, // hasNextPage is a boolean that indicates whether there is a next page of data to fetch or not
    fetchNextPage, // fetchNextPage is a function that can be called to fetch the next page of data
    isFetchingNextPage, // isFetchingNextPage is a boolean that indicates whether the next page of data is being fetched or not
    isRefetching, // isRefetching is a boolean that indicates whether the data is being refetched or not
    isError, // isError is a boolean that indicates whether there was an error in the API call or not
  } = useInfiniteQuery({
    refetchOnWindowFocus: false, // refetchOnWindowFocus is set to false to prevent the query from refetching when the window is focused
    queryKey: [CLIENT_KEY, search], //  used to uniquely identify the query and cache the data.
    queryFn: (
      { pageParam }, // queryFn is a function that is called to fetch the data from the API.
    ) =>
      getAllClients({
        pageParam,
        search,
      }).then((res) => res?.data?.data), // the data returned from the API call is extracted from the response and returned to the queryFn.
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length < 10) {
        return undefined;
      }
      return allPages.length + 1;
    },
    staleTime: 6000,
  });

  const { ref, inView } = useInView(); // useInView is a hook from react-intersection-observer that returns a ref and a boolean indicating whether the element is in view or not. The ref is attached to the last element in the list of clients, and when it comes into view, the fetchNextPage function is called to fetch the next page of clients.

  useEffect(() => {
    // useEffect is a hook that is called when the component is mounted or updated.
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
