import { useMemo, useState } from "react";

export function useSearchableTable<T>(data: T[], predicate?: (item: T, query: string) => boolean) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return data;

    return data.filter((item) => predicate ? predicate(item, query) :
      Object.values(item as Record<string, unknown>).some((value) =>
        String(value).toLowerCase().includes(query),
      ),
    );
  }, [data, searchQuery, predicate]);

  return {
    searchQuery,
    setSearchQuery,
    filteredData,
  };
}
