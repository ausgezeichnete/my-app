import type { HTMLAttributes } from "react";
import { baseStyle, statusConfig, themes, type Status } from "./statusOptions";
type AppStateProps = {
  status?: Status;
  cardText: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

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
