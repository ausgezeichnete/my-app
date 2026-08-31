import { Search } from "lucide-react";
interface AppSearchBarProps {
  placeholder?: string;
  query?: string;
  onQueryChange?: (query: string) => void;
}

export const AppSearchBar: React.FC<AppSearchBarProps> = ({
  placeholder,
  query,
  onQueryChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onQueryChange?.(event.target.value);
  };

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="relative w-80 m-1 ">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-accepted"
        />

        <input
          type="text"
          value={query}
          placeholder={placeholder}
          onChange={handleInputChange}
          className="bg-white border-0 rounded-2xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full "
        />
      </div>
    </form>
  );
};
