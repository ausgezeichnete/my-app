import { useCallback, useEffect, useRef, useState } from "react";

import { AppChip, type Status } from "./appChip";
import { ChevronDown } from "lucide-react";

export interface AppChipOption<T> {
  value: T;
  Label: string;
  status: Status;
}

interface AppChipSelectProps<T> {
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelectStatus = (newValue: T) => {
    onChange?.(newValue);
    setIsOpen(false);
  };
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [dropdownRef],
  );

  useEffect(() => {
    if (isOpen) return;

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, handleClickOutside]);
  return (
    <div
      className={`absolute z-50 mt-2 p-4 bg-white rounded-xl shadow-2xl ${className}`}
      role="listbox"
    >
      <button type="button" onClick={handleToggle} className="">
        <ChevronDown size={16} className={` ${isOpen ? `rotate-180` : ""}`} />
      </button>
      {isOpen && (
        <div className="flex flex-col gap-3">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelectStatus(option.value)}
              className={`p-1 ${value === option.value ? "bg-amber-400" : "bg-amber-900"}`}
              role="option"
              aria-selected={value === option.value}
            >
              <AppChip status={option.status} chipText={option.Label} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
