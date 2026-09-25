import { createColumnHelper } from "@tanstack/react-table";
import { AppButton } from "@/common/appButton/appButton";
import type { CategoryType } from "./categoryType";
import { ChevronDown } from "lucide-react";

const columnHelper = createColumnHelper<CategoryType, unknown>();

export const useProductColumns = () => {
  return [
    columnHelper.accessor("name", {
      header: () => <span className="flex justify-start">Category Name</span>,
      cell: (info) => (
        <div className="flex gap-2 justify-start">
          <img
            src={info.row.original.image}
            alt={info.getValue()}
            className="w-10 h-10 rounded-md object-cover"
          />
          <span>{info.getValue()}</span>
        </div>
      ),
    }),

    columnHelper.accessor("numbers", {
      header: () => <span>Number of Products</span>,
      cell: (info) => <div>30</div>,
    }),

    columnHelper.display({
      id: "actions",
      header: () => <span>Action</span>,
      cell: () => (
        <AppButton
          buttonText="Edit"
          variant="contained"
          width="short"
          endIcon={<ChevronDown size={18} />}
        />
      ),
    }),
  ];
};
