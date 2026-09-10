import { StatCard } from "./StatCard";
import { TopProductsCard } from "./TopProductsCard";
import { ComplaintsCard } from "./ComplaintsCard";
import { STATS, TOP_PRODUCTS, COMPLAINTS } from "./HOMEPAGE_MOCK_DATA";

export const HomePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-4">
        {STATS.map((stat, i) => (
          <StatCard key={stat.title} id={`spark-${i}`} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopProductsCard products={TOP_PRODUCTS} total={799} />
        <ComplaintsCard complaints={COMPLAINTS} />
      </div>
    </div>
  );
};
