import { createColumnHelper } from "@tanstack/react-table";
import type { ProductOrderType } from "./productOrderType";
import { AppButton } from "@/common/appButton/appButton";

const columnHelper = createColumnHelper<ProductOrderType>();

export const useProductOrderColumns = (onView: (orderId: number) => void) => {
  return [
    columnHelper.accessor("orderNumber", {
      header: () => <span>Order Number</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("clientName", {
      header: () => <span>Client Name</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("product", {
      header: () => <span>Product</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("paymentOption", {
      header: () => <span>Payment</span>,
      cell: (info) => {
        const paymentOption = info.getValue();
        return <span>{paymentOption}</span>;
      },
    }),

    columnHelper.accessor("orderStatus", {
      header: () => <span>Status</span>,
      cell: (info) => {
        const status = info.getValue();
        return <span>{status}</span>;
      },
    }),
    columnHelper.accessor("receipt", {
      header: () => <span>Receipt</span>,
      cell: ({ row }) => {
        const orderId = row.original.id;

        return (
          <div className="flex justify-center">
            <AppButton
              buttonText="View"
              variant="contained"
              width="short"
              onClick={() => onView(orderId)}
            />
          </div>
        );
      },
    }),
  ];
};
