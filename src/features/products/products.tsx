import { useSearchParams } from "react-router";
import { ProductCategorization } from "./classifications/productCategorization";
import { ProductManagement } from "./productManagement/productManagement";

export const Products = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "one";
  return (
    <div>
      {tab === "one" && <ProductManagement />}
      {tab === "two" && <ProductCategorization />}
    </div>
  );
};
