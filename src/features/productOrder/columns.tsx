import { createColumnHelper } from "@tanstack/react-table";
import type { ProductOrderType } from "./productOrderTypes";
import { AppButton } from "@/common/appButton/appButton";
import { AppStateCard } from "@/common/appStateCard/appStateCard";

const columnHelper = createColumnHelper<ProductOrderType>();

export const useProductOrderColumns = (onView: (orderId: string) => void) => {
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
        return <AppStateCard status={paymentOption} cardText={paymentOption} />;
      },
    }),

    columnHelper.accessor("orderStatus", {
      header: () => <span>Status</span>,
      cell: (info) => {
        const status = info.getValue();
        return <AppStateCard status={status} cardText={status} />;
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
              width="medium"
              onClick={() => onView(orderId)}
            />
          </div>
        );
      },
    }),
  ];
};
