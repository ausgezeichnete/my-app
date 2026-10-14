import { Search } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

interface AppSearchBarProps {
  placeholder?: string;
  query: string;
  onQueryChange?: (query: string) => void;
}

export const AppSearchBar: React.FC<AppSearchBarProps> = ({
  query,
  onQueryChange,
  placeholder,
}) => {
  const { t } = useTranslation();
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextQuery = event.target.value;
    onQueryChange?.(nextQuery);
    console.log(nextQuery);
  };

  const handleFormSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="relative w-92.5 mb-3">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-button-primary"
        />
        <input
          type="text"
          value={query}
          placeholder={placeholder || t("placeholder")}
          onChange={handleInputChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`bg-white border-0 rounded-2xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${isFocused ? "focus:ring-blue-500" : "focus:ring-transparent"}`}
        />
      </div>
    </form>
  );
};
