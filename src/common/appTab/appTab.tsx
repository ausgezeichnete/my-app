interface AppTabProps {
  className?: string;
  tabText?: string;
  count?: number;
  countColor?: string;
  selectedComponent: string;
  handleTabChange: (tab: string) => void;
  countClassName: string;
}

export const AppTabs = ({
  className,
  handleTabChange,
  tabText,
  count,
  selectedComponent,
  countColor,
  countClassName,
}: AppTabProps) => {
  if (countColor === "green") {
    countColor = "bg-secondary text-white";
  } else if (countColor === "red") {
    countColor = "bg-[#F64E4B] text-white";
  }
  return (
    <div className="">
      <button
        className={`flex items-center justify-between ${className}`}
        onClick={() => handleTabChange(selectedComponent)}
      >
        <span>{tabText}</span>
        {count === 0 ? null : (
          <span
            className={`flex items-center justify-center w-6 h-6 rounded-full  text-white text-sm ${countColor} ${countClassName ?? ""}`}
          >
            {count}
          </span>
        )}
      </button>
    </div>
  );
};
