import { createColumnHelper } from "@tanstack/react-table";

import { AppButton } from "@/common/appButton/appButton";

import type { ClientOrderType } from "./clientOrders.types";

const columnHelper = createColumnHelper<ClientOrderType>(); // not <ClientOrderType, unknown>

export const useClientOrderColumns = (onView: (orderId: number) => void) => {
  return [
    columnHelper.accessor("orderNumber", {
      header: () => <span>Order Number</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),

    columnHelper.accessor("product", {
      header: () => <span>Product</span>,
      cell: (info) => <span>{info.getValue()}</span>,
    }),

    columnHelper.accessor("paymentMethod", {
      header: () => <span>Payment Method</span>,
      cell: (info) => <span>{info.getValue()}</span>,
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
          <AppButton
            buttonText="View"
            variant="contained"
            width="short"
            onClick={() => onView(orderId)}
          />
        );
      },
    }),
  ];
};
