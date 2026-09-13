import { Card } from "@/components/ui/card";
import { Maximize2 } from "lucide-react";
import { PieChart, Pie, Sector, type PieSectorDataItem } from "recharts";

type Product = {
  name: string;
  sales: number;
  percentage: number;
  color: string;
};

type TopProductsCardProps = {
  products: Product[];
  total: number;
};

export const TopProductsCard = ({ products, total }: TopProductsCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-primary">Top Selling Products</h3>
        <button className="flex items-center gap-1 text-sm text-accent">
          <Maximize2 size={14} />
          Details
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-8">
        <table className="text-sm w-full">
          <thead>
            <tr className="text-dark-grey text-left">
              <th className="font-normal pb-2">Product</th>
              <th className="font-normal pb-2 text-center">Sales</th>
              <th className="font-normal pb-2 text-right">%</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.name}>
                <td className="py-1 flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{ backgroundColor: p.color }}
                  />
                  {p.name}
                </td>
                <td className="py-1 text-center">{p.sales}</td>
                <td className="py-1 text-right">{p.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="relative h-40 w-40 shrink-0">
          <PieChart width={160} height={160}>
            <Pie
              data={products}
              dataKey="sales"
              nameKey="name"
              innerRadius={55}
              outerRadius={75}
              paddingAngle={2}
              stroke="none"
              shape={(props: PieSectorDataItem) => (
                <Sector
                  {...props}
                  fill={
                    products.find((product) => product.name === props.name)
                      ?.color
                  }
                />
              )}
            />
          </PieChart>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs text-dark-grey">Total</span>
            <span className="text-xl font-semibold text-primary">{total}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
