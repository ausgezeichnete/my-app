interface AppTabProps {
  className?: string;
  tabText?: string;
  count?: number;
  CountColor?: string;
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
  CountClassName,
}: AppTabProps) => {
  if (countColor === "green") {
    countColor = "bg-[#10C0AA] text-white";
  } else if (countColor === `red `) {
    countColor = "bg-[#F64E4B] text-white";
  }
  return (
    <div className="flex justify-center items-center">
      <button
        className={className}
        onClick={() => handleTabChange(selectedComponent)}
      >
        {tabText}
      </button>
      {count === 0 ? null : (
        <span
          className={`p-1.5 text-sm sm:text-[16px] ${countColor} ${CountClassName ?? ""}`}
        ></span>
      )}
    </div>
  );
};
