// hooks/useSearchableTable.ts
import { useMemo, useState } from "react";

export function useSearchableTable<T>(
  data: T[],
  predicate: (item: T, query: string) => boolean,
) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return data;
    return data.filter((item) => predicate(item, searchQuery));
  }, [data, searchQuery, predicate]);

  return { searchQuery, setSearchQuery, filteredData };
}
