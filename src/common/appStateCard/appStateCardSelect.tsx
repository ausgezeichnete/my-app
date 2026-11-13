import { useEffect, useRef, useState } from "react";
import { AppStateCard } from "./appStateCard";
import { statusOptions, type Status } from "./statusOptions";
import { ChevronDown } from "lucide-react";

export interface AppStateCardOption {
  value: Status;
  status?: Status;
  Label: string;
}

export interface AppStateCardSelectProps {
  options?: AppStateCardOption[];
  onChange: (newValue: Status) => void;
  status?: Status;
}

export function AppStateCardSelect({
  options = statusOptions,
  onChange,
  status,
}: AppStateCardSelectProps) {
  // find the option matching the current status, fallback to the first one
  const selectedOption =
    options.find((option) => option.status === status) || options[0];

  // State to manage the dropdown open/close status
  const [isOpen, setIsOpen] = useState(false);
  // Ref to the dropdown container to detect outside clicks
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  const handleStatusChange = (newValue: Status) => {
    onChange(newValue);
    setIsOpen(false);
  };
  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, isOpen]);

  return (
    <div
      className="flex gap-2 items-center justify-center relative"
      ref={dropdownRef}
    >
      <button onClick={() => setIsOpen(!isOpen)} className="relative">
        <AppStateCard
          status={selectedOption?.status}
          cardText={selectedOption?.Label}
        />
        <ChevronDown
          className={`absolute right-1 top-1/2 -translate-y-1/2 ${isOpen ? "rotate-180" : ""}`}
          size={10}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 z-50 bg-white rounded-xl shadow-2xl flex flex-col gap-2 p-2 w-max">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleStatusChange(option.value)}
            >
              <AppStateCard status={option.status} cardText={option.Label} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
