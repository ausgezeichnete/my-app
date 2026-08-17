import type { CSSProperties, HTMLAttributes } from "react";

type Status = "disabled" | "active" | "inActive" | "suspended";

type AppChipPros = {
  status?: Status;
  chipText: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const baseStyle: CSSProperties = {
  fontSize: "16px",
  borderRadius: "10px",
  display: "inline-flex",
  alignItems: "center",
  height: "38px",
};

const colorStyles: Record<
  Status,
  { background: string; color: string; cursor?: string }
> = {
  active: { background: "#3aa3a326", color: "#3aa3a3" },
  inActive: { background: "#ffc24626", color: "#ffc246" },
  suspended: { background: "red", color: "red" },
  disabled: { background: "gray",  color: "black", cursor: "not-allowed" },
};

export const AppChip = ({
  status = "disabled",
  chipText,
  ...props
}: AppChipPros) => {
  const statusStyle = colorStyles[status];

  return (
    <div
      {...props}
      style={{
        ...baseStyle,
        backgroundColor: statusStyle.background,
        color: statusStyle.color,
        cursor: statusStyle.cursor,
      }}
    >
      {chipText}
    </div>
  );
};
