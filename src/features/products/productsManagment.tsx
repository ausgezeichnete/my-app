import { useSearchParams } from "react-router";
import { ProductCategorization } from "./categories/productCategorization";
import { Products } from "./products/Products";
import { AppTabs } from "@/common/appTab/appTab";

export const ProductsManagement = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "p";

  type HandleTabChange = (newTab: string) => void;

  const handleTabChange: HandleTabChange = (newTab) => {
    setSearchParams({ tab: newTab });
  };
  return (
    <div>
      <h2>Products Management</h2>
      <div className="flex gap-4.5 mb-5">
        <AppTabs
          tabText="Products"
          count={45}
          countColor="green"
          selectedComponent="p"
          className={`p-2 w-[150px] h-[48px] ${
            tab === "p" ? "border-b-2 border-secondary" : ""
          }`}
          handleTabChange={handleTabChange}
          countClassName="rounded-full"
        />

        <AppTabs
          tabText="Categories"
          count={12}
          countColor="red"
          selectedComponent="c"
          className={`p-2 w-[150px] h-[48px] ${
            tab === "c" ? "border-b-2 border-secondary " : ""
          }`}
          handleTabChange={handleTabChange}
          countClassName="rounded-full"
        />
      </div>
      {tab === "p" && <Products />}
      {tab === "c" && <ProductCategorization />}
    </div>
  );
};
