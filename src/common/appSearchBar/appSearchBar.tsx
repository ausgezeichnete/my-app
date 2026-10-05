import { Search } from "lucide-react";
import { useEffect } from "react";

interface AppSearchBarProps<T> {
  placeholder?: string;
  query?: string;
  onQueryChange?: (query: string) => void;
  searchableData?: readonly T[];
  searchableFields?: readonly (keyof T)[];
  onFilteredDataChange?: (filteredData: T[]) => void;
}

const filterItems = <T,>(
  items: readonly T[],
  query: string,
  searchableFields?: readonly (keyof T)[],
): T[] => {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) return [...items];

  return items.filter((item) => {
    const values =
      typeof item === "object" && item !== null
        ? (searchableFields?.map((field) => item[field]) ?? Object.values(item))
        : [item];

    return values.some(
      (value) =>
        (typeof value === "string" ||
          typeof value === "number" ||
          typeof value === "boolean") &&
        String(value).toLowerCase().includes(normalizedQuery),
    );
  });
};

export const AppSearchBar = <T = unknown,>({
  placeholder = "Search...",
  query,
  onQueryChange,
  searchableData,
  searchableFields,
  onFilteredDataChange,
}: AppSearchBarProps<T>) => {
  useEffect(() => {
    if (searchableData && onFilteredDataChange) {
      onFilteredDataChange(
        filterItems(searchableData, query ?? "", searchableFields),
      );
    }
  }, [searchableData, searchableFields, query, onFilteredDataChange]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextQuery = event.target.value;
    onQueryChange?.(nextQuery);
    if (searchableData && onFilteredDataChange) {
      onFilteredDataChange(
        filterItems(searchableData, nextQuery, searchableFields),
      );
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="relative w-92.5 mb-3">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-button-primary"
        />{" "}
        <input
          type="text"
          value={query ?? ""}
          placeholder={placeholder}
          onChange={handleInputChange}
          className="bg-white border-0 rounded-2xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full "
        />
      </div>
    </form>
  );
};
