import type { HTMLAttributes } from "react";
type AppStateProps = {
  status?: status;
  cardText: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

type status =
  | "active"
  | "inActive"
  | "accepted"
  | "rejected"
  | "pending"
  | "inProgress"
  | "completed"
  | "cancelled"
  | "delivered"
  | "shipped"
  | "returned"
  | "outForDelivery"
  | "failedDelivery"
  | "processing"
  | "onHold"
  | "awaitingPayment"
  | "paymentFailed"
  | "paymentPending"
  | "paymentCompleted"
  | "paymentRefunded"
  | "paymentDisputed"
  | "paymentChargeback"
  | "paymentCancelled"
  | "delayed"
  | "inTransit"
  | "FullTime"
  | "PartTime"
  | "Contract";

const themes = {
  green: { background: "#3aa3a31a", color: "#166534" },
  amber: { background: "#ffc2461a", color: "#92400e" },
  yellow: { background: "#fef3c7", color: "#92400e" },
  gray: { background: "#e5e7eb", color: "#374151" },
  indigo: { background: "#e0e7ff", color: "#3730a3" },
  red: { background: "#fee2e2", color: "#991b1b" },
  cyan: { background: "#cffafe", color: "#155e75" },
  emerald: { background: "#d1fae5", color: "#065f46" },
  orange: { background: "#ffedd5", color: "#9a3412" },
  blue: { background: "#dbeafe", color: "#1e3a8a" },
  teal: { background: "#ccfbf1", color: "#115e59" },
  purple: { background: "#ede9fe", color: "#5b21b6" },
  lightGray: { background: "#f3f4f6", color: "#374151" },
} satisfies Record<string, { background: string; color: string }>;

const statusConfig = {
  active: { label: "Active", theme: "green" },
  inActive: { label: "In Active", theme: "amber" },
  accepted: { label: "Accepted", theme: "green" },
  rejected: { label: "Rejected", theme: "amber" },
  pending: { label: "Pending", theme: "yellow" },
  inProgress: { label: "In Progress", theme: "gray" },
  completed: { label: "Completed", theme: "indigo" },
  cancelled: { label: "Cancelled", theme: "red" },
  delivered: { label: "Delivered", theme: "cyan" },
  shipped: { label: "Shipped", theme: "emerald" },
  returned: { label: "Returned", theme: "orange" },
  outForDelivery: { label: "Out for Delivery", theme: "red" },
  failedDelivery: { label: "Failed", theme: "emerald" },
  processing: { label: "Processing", theme: "blue" },
  onHold: { label: "On Hold", theme: "yellow" },
  awaitingPayment: { label: "Awaiting", theme: "teal" },
  paymentFailed: { label: "Failed", theme: "red" },
  paymentPending: { label: "Pending", theme: "yellow" },
  paymentCompleted: { label: "Completed", theme: "emerald" },
  paymentRefunded: { label: "Refunded", theme: "lightGray" },
  paymentDisputed: { label: "Disputed", theme: "purple" },
  paymentChargeback: { label: "Chargeback", theme: "orange" },
  paymentCancelled: { label: "Cancelled", theme: "red" },
  delayed: { label: "Delayed", theme: "yellow" },
  inTransit: { label: "In Transit", theme: "blue" },
  FullTime: { label: "Full Time", theme: "yellow" },
  PartTime: { label: "Part Time", theme: "orange" },
  Contract: { label: "Contract", theme: "lightGray" },
} satisfies Record<status, { label: string; theme: keyof typeof themes }>;

const baseStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 300,
  borderRadius: "12px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "38px",
  padding: "10px",
  minWidth: "100px",
};

export const AppStateCard = ({
  status = "pending",
  cardText,
  ...props
}: AppStateProps) => {
  const { label, theme } = statusConfig[status];
  return (
    <div {...props} style={{ ...baseStyle, ...themes[theme] }}>
      {label || cardText}
    </div>
  );
};
