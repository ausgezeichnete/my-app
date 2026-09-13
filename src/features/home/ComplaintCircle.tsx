import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

type ComplaintCircleProps = {
  label: string;
  percentage: number;
  color: string;
};

export const ComplaintCircle = ({
  label,
  percentage,
  color,
}: ComplaintCircleProps) => {
  const data = [{ value: percentage, fill: color }];

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-28 w-28">
        <RadialBarChart
          width={112}
          height={112}
          innerRadius="75%"
          outerRadius="100%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="value" cornerRadius={10} background />
        </RadialBarChart>
        <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-primary">
          {percentage}%
        </div>
      </div>
      <span className="text-sm text-dark-grey text-center">{label}</span>
    </div>
  );
};
