import { Card } from "@/components/ui/card";
import { Maximize2 } from "lucide-react";
import { ComplaintCircle } from "./ComplaintCircle";

type Complaint = { label: string; percentage: number; color: string };

type ComplaintsCardProps = { complaints: Complaint[] };

export const ComplaintsCard = ({ complaints }: ComplaintsCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-primary">Complaint Statistics</h3>
        <button className="flex items-center gap-1 text-sm text-accent">
          <Maximize2 size={14} />
          Details
        </button>
      </div>

      <div className="flex flex-wrap justify-around gap-6">
        {complaints.map((c) => (
          <ComplaintCircle key={c.label} {...c} />
        ))}
      </div>
    </Card>
  );
};
