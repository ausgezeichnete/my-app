import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import type { ProductType } from "./productTypes";
import { AppButton } from "@/common/appButton/appButton";

const columnHelper = createColumnHelper<ProductType>();

export const useProductColumns = () => {
  return [
    columnHelper.accessor("name", {
      header: () => <span className=" block text-center">Product Name</span>,
      cell: (info) => (
        <div className="flex items-center gap-3">
          <img
            src={info.row.original.image}
            alt={info.getValue()}
            className="w-10 h-10 rounded-md object-cover"
          />
          <span className=" block text-center">{info.getValue()}</span>
        </div>
      ),
    }),

    columnHelper.accessor("category", {
      header: () => <span className=" block text-center">Category</span>,
      cell: (info) => (
        <span className=" block text-center">{info.getValue()}</span>
      ),
    }),

    columnHelper.accessor("orderDeadline", {
      header: () => <span className=" block text-center">Order Deadline</span>,
      cell: (info) => (
        <span className=" block text-center">{info.getValue()}</span>
      ),
    }),

    columnHelper.accessor("quantity", {
      header: () => <span className=" block text-center">Quantity</span>,
      cell: (info) => (
        <span className=" block text-center">{info.getValue()}</span>
      ),
    }),

    columnHelper.accessor("price", {
      header: () => <span className=" block text-center">Price</span>,
      cell: (info) => {
        const price = info.getValue();
        const currency = info.row.original.currency;
        return (
          <span className=" block text-center">
            {currency} {price.toFixed(2)}
          </span>
        );
      },
    }),

    columnHelper.display({
      id: "actions",
      header: () => <span className=" block text-center">Action</span>,
      cell: ({ row }) => (
        <AppButton buttonText="Edit" variant="contained" width="medium" />
      ),
    }),
  ];
};
