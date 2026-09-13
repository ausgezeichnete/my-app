import { AppStateCard } from "@/common/appStateCard/appStateCard";

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
    <div className="rounded-xl p-6 shadow-sm bg-white text-[14px]">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="text-[12px] font-semibold  border-muted-foreground/30">
          Current Order Status:
        </div>
        <AppStateCard status="accepted" cardText="accepted" />
      </div>

      {/* Timeline */}
      <div className="space-y-6">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={item.id} className="flex ">
              {/* Indicator */}
              <div className="flex flex-col items-center mr-3 mt-3">
                <div
                  className={`
                    h-4 w-4 shrink-0 rounded-full border-4 
                    ${
                      item.status === "current"
                        ? "border-highlight"
                        : item.status === "completed"
                          ? "border-amber-50 bg-success"
                          : "border-muted-foreground/30 bg-white"
                    }
                  `}
                />
                {!isLast && <div className="mt-1 h-full w-px bg-border" />}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4 text-[16px]">
                  <div
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
                  </div>

                  {item.time && (
                    <span className="shrink-0 text-sm text-light-grey">
                      {item.time}
                    </span>
                  )}
                </div>

                {item.description && (
                  <p className="mt-1 text-sm  text-light-grey">
                    {item.description}
                  </p>
                )}

                {item.date && (
                  <p className="mt-1 text-xs  text-light-grey">{item.date}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
