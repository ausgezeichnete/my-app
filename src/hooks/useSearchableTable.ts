import { useMemo, useState } from "react";

export function useSearchableTable<T>(data: T[]) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return data;

    return data.filter((item) =>
      Object.values(item as Record<string, unknown>).some((value) =>
        String(value).toLowerCase().includes(query),
      ),
    );
  }, [data, searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    filteredData,
  };
}
