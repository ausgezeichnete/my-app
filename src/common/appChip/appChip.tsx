import type { CSSProperties, HTMLAttributes } from "react";

type Status =
  | "disabled"
  | "active"
  | "inActive"
  | "suspended"
  | "inTransit"
  | "pending"
  | "outForDelivery"
  | "delivered"
  | "delayed"
  | "cancelled";

type AppChipPros = {
  status?: Status;
  chipText: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const baseStyle: CSSProperties = {
  fontSize: "16px",
  borderRadius: "10px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "38px",
  width: "100px",
};

const colorStyles: Record<
  Status,
  { background: string; color: string; cursor?: string }
> = {
  active: { background: "#3aa3a326", color: "#3aa3a3" },
  inActive: { background: "#ffc24626", color: "#ffc246" },
  suspended: { background: "pink", color: "red" },
  disabled: { background: "gray", color: "black", cursor: "not-allowed" },
  inTransit: { background: "#e0e7ff", color: "#4f46e5" },
  pending: { background: "#fef3c7", color: "#b45309" },
  outForDelivery: { background: "#cffafe", color: "#0891b2" },
  delivered: { background: "#d1fae5", color: "#047857" },
  delayed: { background: "#ffedd5", color: "#ea580c" },
  cancelled: { background: "#fee2e2", color: "#dc2626" },
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
