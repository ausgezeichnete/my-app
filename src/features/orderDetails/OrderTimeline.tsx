import { AppChip } from "@/common/appChip/appChip";

type TimelineItem = {
  id: number;
  title: string;
  description?: string;
  date?: string;
  time?: string;
  status: "completed" | "current" | "pending";
};

type OrderTimelineProps = {
  items: TimelineItem[];
};

export const OrderTimeline = ({ items }: OrderTimelineProps) => {
  return (
    <div className="rounded-xl  p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Current Order Status</h2>
        <AppChip status="completed" chipText="completed" />
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={item.id} className="flex gap-4">
              {/* Indicator */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    h-4 w-4 shrink-0 rounded-full border-4
                    ${
                      item.status === "current"
                        ? "border-warning bg-white"
                        : item.status === "completed"
                          ? "border-success bg-success"
                          : "border-muted-foreground/30 bg-white"
                    }
                  `}
                />

                {!isLast && <div className="mt-1 h-full w-px bg-border" />}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className={`
                      font-bold
                      ${
                        item.status === "current"
                          ? "text-secondary"
                          : "text-foreground"
                      }
                    `}
                  >
                    {item.title}
                  </h3>

                  {item.time && (
                    <span className="shrink-0 text-sm text-muted-foreground">
                      {item.time}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}

                {item.date && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.date}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
