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
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="flex justify-end m-2  "
      />
    </form>
  );
};
