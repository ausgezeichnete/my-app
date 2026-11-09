import { useCallback, useEffect, useRef, useState } from "react";

import { AppChip, type Status } from "./appChip";
import { ChevronDown } from "lucide-react";

export interface AppChipOption<T> {
  value: T;
  Label: string;
  status: Status;
}

export interface AppChipSelectProps<T> {
  value: T;
  onChange?: (newValue: T) => void;
  options: AppChipOption<T>[];
  className?: string;
}
export function AppChipSelect<T>({
  value,
  onChange,
  options,
  className = "",
}: AppChipSelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // ref to monitor clicks outside the dropdown
  const handleToggle = () => setIsOpen((prev) => !prev); // function to toggle the dropdown and set the state of isOpen

  const selectedOption = options.find((option) => option.value === value);

  // function to handle the selection of a new status
  const handleSelectStatus = (newValue: T) => {
    onChange?.(newValue);
    setIsOpen(false);
  };

  //function to handle clicks outside the dropdown to close it
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current && // check if the dropdownRef is defined
        !dropdownRef.current.contains(event.target as Node) // check if the click is outside the dropdown
      ) {
        setIsOpen(false);
      }
    },
    [dropdownRef],
  );

  useEffect(() => {
    if (!isOpen) return; // if the dropdown is not open, we don't need to listen for outside clicks

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, handleClickOutside]);

  return (
    <div ref={dropdownRef} className="relative">
      <div className={` ${className}`} role="listbox">
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center relative p-2"
        >
          {selectedOption && (
            <AppChip
              status={selectedOption.status}
              chipText={selectedOption.Label}
            />
          )}

          <ChevronDown
            size={16}
            className={`absolute right-4 transition-transform    ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 z-9999 bg-white rounded-xl shadow-2xl flex flex-col gap-2 p-2 w-max">
            {options.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelectStatus(option.value)}
                className={`p-1 ${value === option.value ? "" : "bg-error-muted text-error"}`}
                role="option"
                aria-selected={value === option.value}
              >
                <AppChip status={option.status} chipText={option.Label} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
