import { Card } from "@/components/ui/card";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

type StatCardProps = {
  id: string;
  title: string;
  value: number;
  data: number[];
  color: string;
};

export const StatCard = ({ id, title, value, data, color }: StatCardProps) => {
  const chartData = data.map((v, i) => ({ i, v }));

  return (
    <Card className="p-5 flex flex-col gap-3">
      <span className="text-sm text-dark-grey">{title}</span>
      <div className="flex items-end justify-between gap-2">
        <div className="h-10 w-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={color} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="v"
                stroke={color}
                strokeWidth={2}
                fill={`url(#${id})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <span className="text-2xl font-semibold text-primary">{value}</span>
      </div>
    </Card>
  );
};
