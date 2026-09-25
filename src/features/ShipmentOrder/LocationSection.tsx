import { Phone, MapPin, Clock, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { LocationInfo } from "./Shipmentdetailscard.types";

export interface LocationSectionProps {
  data: LocationInfo;
  onShowMap: (location: LocationInfo) => void;
}

export function LocationSection({ data, onShowMap }: LocationSectionProps) {
  return (
    <Card className="shadow-none">
      <CardContent className="flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <Button
            variant="link"
            size="sm"
            onClick={() => onShowMap(data)}
            className="h-auto gap-1.5 p-0 text-teal-600"
          >
            <MapPin size={15} />
            Show location on map
          </Button>
          <span className="text-sm font-medium text-slate-500">
            {data.label}
          </span>
        </div>

        <div className="flex items-center justify-end gap-2">
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-800">{data.city}</p>
            <p className="text-xs text-slate-400">{data.address}</p>
          </div>
          <MapPin size={16} className="text-amber-500" />
        </div>

        <div className="flex flex-wrap items-center justify-end gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {data.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {data.time}
          </span>
        </div>

        <div className="flex items-center justify-end gap-1 text-xs text-slate-500">
          <Phone size={14} />
          {data.phone}
        </div>
      </CardContent>
    </Card>
  );
}
