import AppTable from "@/common/table/table.content";
import type { ColumnDef } from "@tanstack/react-table";
import { useProductColumns } from "./columns";
import PRODUCTS_MOCK_DATA from "./PRODUCTS_MOCK_DATA.json";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { useNavigate, useSearchParams } from "react-router-dom";

export const ProductManagement = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("tab") || "one";

  type HandleTabChange = (newTab: string) => void;

  const handleTabChange: HandleTabChange = (newTab) => {
    setSearchParams({ tab: newTab });
  };

  const columns = useProductColumns();
  const navigate = useNavigate();
  return (
    <div>
      {/* <h2>Products management</h2> */}
      <div className="flex gap-4.5">
        
        {/* <h3 className="flex justify-between mt-1 mb-3 border-b-2 border-highlight-green">
          Products
          <div className="size-5 rounded-full flex items-center justify-center bg-highlight-green text-white">
            <span className="text-xs">4</span>
          </div>
        </h3> */}

        {/* <h3 className="flex gap-4.5">
          Categories
          <div className="size-5 rounded-full flex items-center justify-center bg-highlight-green text-white">
            <span className="text-xs">45</span>
          </div>
        </h3> */}

        <AppTabs
      </div>

      <div className="flex justify-between">
        
        <AppSearchBar />
        <div className="mb-4">
          <Button
            onClick={() => {
              if (tab === "one") {
                navigate("products/add-new-product");
              } else if (tab === "two") {
                navigate("products/add-new-category");
              }
            }}
            className="flex items-center gap bg-button-primary hover:bg-accepted/90 text-button-foreground"
          >
            <Plus className="w-4 h-4" />
            Add New Product
          </Button>
        </div>{" "}
      </div>

      <AppTable
        columns={columns as ColumnDef<any>[]}
        data={PRODUCTS_MOCK_DATA}
      />
    </div>
  );
};
