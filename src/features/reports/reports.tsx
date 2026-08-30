import { Card, CardContent } from "@/components/ui/card";
import { Users, UserCheck, Package, Truck } from "lucide-react";

const reportCards = [
  { title: "Customers", icon: Users },
  { title: "Agents", icon: UserCheck },
  { title: "Products", icon: Package },
  { title: "Shipments", icon: Truck },
];

export function Reports() {
  return (
    <div className="p-8">
      {/* Title */}
      <h1 className="text-2xl font-bold text-left mb-6 text-slate-800">
        Reports
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {reportCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow duration-200 cursor-pointer border-slate-200"
            >
              <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                <Icon className="w-12 h-12 text-teal-400 stroke-[1.5]" />
                <span className="font-semibold text-lg text-slate-700">
                  {card.title}
                </span>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
