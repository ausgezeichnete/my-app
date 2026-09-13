import { createColumnHelper } from "@tanstack/react-table";
import type { ProductType } from "./productTypes";
import { AppButton } from "@/common/appButton/appButton";
import { ChevronDown } from "lucide-react";

const columnHelper = createColumnHelper<ProductType>();

export const useProductColumns = () => {
  return [
    columnHelper.accessor("name", {
      header: () => <span>Product Name</span>,
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

    columnHelper.accessor("category", {
      header: () => <span>Category</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),

    columnHelper.accessor("orderDeadline", {
      header: () => <span>Order Deadline</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),

    columnHelper.accessor("quantity", {
      header: () => <span>Quantity</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),

    columnHelper.accessor("price", {
      header: () => <span>Price</span>,
      cell: (info) => {
        const price = info.getValue();
        const currency = info.row.original.currency;
        return (
          <span>
            {currency} {price.toFixed(2)}
          </span>
        );
      },
    }),

    columnHelper.display({
      id: "actions",
      header: () => <span>Action</span>,
      cell: () => (
        <AppButton
          buttonText="Edit"
          variant="contained"
          width="medium"
          endIcon={<ChevronDown size={18} />}
        />
      ),
    }),
  ];
};
