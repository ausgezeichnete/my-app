import CATEGORIES_MOCK_DATA from "./CATEGORIES_MOCK_DATA.json";
import { useProductColumns } from "./columns";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { Plus } from "lucide-react";
import AppTable from "@/common/table/table.content";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ProductCategorization = () => {
  const columns = useProductColumns();
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between">
        <AppSearchBar />
        <div className="mb-4">
          <Button
            onClick={() => {
              navigate("add-new-category");
            }}
            className="flex items-center gap bg-button-primary hover:bg-accepted/90 text-button-foreground "
          >
            <Plus className="w-4 h-4" />
            Add New Category
          </Button>
        </div>{" "}
      </div>

      <AppTable
        columns={columns as ColumnDef<any>[]}
        data={CATEGORIES_MOCK_DATA}
      />
    </div>
  );
};
