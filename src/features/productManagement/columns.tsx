import { createColumnHelper } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import type { ProductType } from "./productTypes";

const columnHelper = createColumnHelper<ProductType>();

export const useProductColumns = () => {
  return [
    columnHelper.accessor("name", {
      header: () => <span>Product Name</span>,
      cell: (info) => (
        <div className="flex items-center gap-3">
          <img
            src={info.row.original.image}
            alt={info.getValue()}
            className="w-10 h-10 rounded-md object-cover bg-accepted"
          />
          <span className="">{info.getValue()}</span>
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
      cell: ({ row }) => (
        <Button
          size="sm"
          className="bg-accepted hover:bg-accepted/60 text-white flex items-center gap-2 rounded-md px-4"
        >
          <span>Edit</span>
        </Button>
      ),
    }),
  ];
};

// Example handler function for the action button
const handleEdit = (id: string) => {
  console.log("Edit product:", id);
};
