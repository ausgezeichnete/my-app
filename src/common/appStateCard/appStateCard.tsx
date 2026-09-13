import type { HTMLAttributes } from "react";
type Status =
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
const statusLabels: Record<Status, string> = {
  active: "active",
  inActive: "In active",
  accepted: "Accepted",
  rejected: "Rejected",
  pending: "Pending",
  inProgress: "In Progress",
  completed: "Completed",
  cancelled: "Cancelled",
  delivered: "Delivered",
  shipped: "Shipped",
  returned: "Returned",
  outForDelivery: "Out for Delivery",
  failedDelivery: "Delivery Failed",
  processing: "Processing",
  onHold: "On Hold",
  awaitingPayment: "Awaiting Payment",
  paymentFailed: "Failed",
  paymentPending: "Pending",
  paymentCompleted: "Completed",
  paymentRefunded: "Refunded",
  paymentDisputed: "Disputed",
  paymentChargeback: "Chargeback",
  paymentCancelled: "Cancelled",
  delayed: "Delayed",
  inTransit: "In Transit",
  FullTime: "Full Time",
  PartTime: "Part Time",
};
type AppStateProps = {
  status?: Status;
  cardText: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const baseStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "light",
  borderRadius: "12px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "38px",
  padding: "10px",
  //minWidth: "150px",
};

const colorStyles: Record<
  Status,
  { background: string; color: string; cursor?: string }
> = {
  active: {
    background: "#3aa3a31a",
    color: "#166534",
  },
  inActive: {
    background: "#ffc2461a",
    color: "#92400e",
  },

  accepted: {
    background: "#3aa3a31a",
    color: "#166534",
  },

  rejected: {
    background: "#ffc2461a",
    color: "#92400e",
  },

  pending: {
    background: "#fef3c7",
    color: "#92400e",
  },

  inProgress: {
    background: "#e5e7eb",
    color: "#374151",
    cursor: "not-allowed",
  },

  completed: {
    background: "#e0e7ff",
    color: "#3730a3",
  },

  cancelled: {
    background: "#fee2e2",
    color: "#991b1b",
  },

  delivered: {
    background: "#cffafe",
    color: "#155e75",
  },

  shipped: {
    background: "#d1fae5",
    color: "#065f46",
  },

  returned: {
    background: "#ffedd5",
    color: "#9a3412",
  },

  outForDelivery: {
    background: "#fee2e2",
    color: "#991b1b",
  },

  failedDelivery: {
    background: "#dcfce7",
    color: "#166534",
  },

  processing: {
    background: "#dbeafe",
    color: "#1e3a8a",
  },

  onHold: {
    background: "#fef3c7",
    color: "#92400e",
  },

  awaitingPayment: {
    background: "#ccfbf1",
    color: "#115e59",
  },

  paymentFailed: {
    background: "#fee2e2",
    color: "#991b1b",
  },

  paymentPending: {
    background: "#fef3c7",
    color: "#92400e",
  },

  paymentCompleted: {
    background: "#dcfce7",
    color: "#166534",
  },

  paymentRefunded: {
    background: "#f3f4f6",
    color: "#374151",
    cursor: "not-allowed",
  },

  paymentDisputed: {
    background: "#ede9fe",
    color: "#5b21b6",
  },

  paymentChargeback: {
    background: "#ffedd5",
    color: "#9a3412",
  },

  paymentCancelled: {
    background: "#fee2e2",
    color: "#991b1b",
  },
  delayed: {
    background: "#fef3c7",
    color: "#92400e",
  },
  inTransit: {
    background: "#dbeafe",
    color: "#1e3a8a",
  },
  FullTime: {
    background: "#fef3c7",
    color: "#92400e",
  },
  PartTime: {
    background: "#ffedd5",
    color: "#9a3412",
  },
  Contract: {
    background: "#f3f4f6",
    color: "#374151",
  },
};

export const AppStateCard = ({
  status = "pending",
  cardText,
  ...props
}: AppStateProps) => {
  return (
    <div
      {...props}
      style={{
        ...baseStyle,
        ...colorStyles[status],
      }}
    >
      {statusLabels[status] ?? cardText}
    </div>
  );
};
