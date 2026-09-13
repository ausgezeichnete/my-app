import AppTable from "@/common/table/table.content";
import type { ColumnDef } from "@tanstack/react-table";
import { useProductColumns } from "./columns";
import PRODUCTS_MOCK_DATA from "./PRODUCTS_MOCK_DATA.json";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";

export const Product = () => {
  const columns = useProductColumns();
  return (
    <div>
      <h2>Products management</h2>
      <div className="flex gap-4.5">
        {" "}
        <h3 className="flex justify-between mt-1 mb-3 border-b-2 border-highlight-green">
          Products{" "}
          <div className="size-5 rounded-full flex items-center justify-center bg-highlight-green text-white">
            <span className="text-xs">4</span>
          </div>
        </h3>
        <h3 className="flex gap-4.5">
          Categories
          <div className="size-5 rounded-full flex items-center justify-center bg-highlight-green text-white">
            <span className="text-xs">45</span>
          </div>
        </h3>
      </div>
      <div className="flex justify-between">
        {" "}
        <AppSearchBar />
        <div className="mb-4">
          <Button
            onClick={() => console.log("Add Product Clicked")}
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
