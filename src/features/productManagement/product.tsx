import AppTable from "@/common/table/table.content";
import type { ColumnDef } from "@tanstack/react-table";
import { useProductColumns } from "./columns";
import PRODUCTS_MOCK_DATA from "./PRODUCTS_MOCK_DATA.json";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const Product = () => {
  const columns = useProductColumns();
  return (
    <div className="p-4">
      <div className="mb-4">
        <Button
          onClick={() => console.log("Add Product Clicked")}
          className="flex items-center gap bg-button-primary hover:bg-accepted/90 text-button-foreground"
        >
          <Plus className="w-4 h-4" />
          Add New Product
        </Button>
      </div>{" "}
      <AppTable
        columns={columns as ColumnDef<any>[]}
        data={PRODUCTS_MOCK_DATA}
      />
    </div>
  );
};
