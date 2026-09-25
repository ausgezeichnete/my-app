import AppTable from "@/common/table/table.content";
import type { ColumnDef } from "@tanstack/react-table";
import { useProductColumns } from "./columns";
import PRODUCTS_MOCK_DATA from "./PRODUCTS_MOCK_DATA.json";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { useNavigate } from "react-router-dom";
export const Products = () => {
  const columns = useProductColumns();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between">
        <AppSearchBar />
        <div className="mb-4">
          <Button
            onClick={() => {
              navigate("add-new-product");
            }}
            className="flex items-center gap bg-button-primary hover:bg-accepted/90 text-button-foreground "
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
