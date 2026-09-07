import { createColumnHelper } from "@tanstack/react-table";

import { AppChip } from "@/common/appChip/appChip";
import { AppButton } from "@/common/appButton/appButton";

import type { ClientOrderType } from "./clientOrders.types";

const columnHelper = createColumnHelper<ClientOrderType, unknown>();

export const useClientColumns = (onView: (orderId: number) => void) => {
  return [
    columnHelper.accessor("orderNumber", {
      header: () => <span className=" block text-center">Order Number</span>,
      cell: (info) => (
        <span className=" block text-center">{info.getValue()}</span>
      ),
    }),

    columnHelper.accessor("product", {
      header: () => <span className=" block text-center">Product</span>,
      cell: (info) => (
        <span className=" block text-center">{info.getValue()}</span>
      ),
    }),

    columnHelper.accessor("paymentMethod", {
      header: () => <span className=" block text-center">Payment Method</span>,
      cell: (info) => (
        <span className=" block text-center">{info.getValue()}</span>
      ),
    }),

    columnHelper.accessor("orderStatus", {
      header: () => <span className=" block text-center">Status</span>,
      cell: (info) => {
        const status = info.getValue();

        return (
          <AppChip
            chipText={status}
            status={status}
            className="px-2 py-1 rounded-full text-xs font-medium block text-center"
          />
        );
      },
    }),

    columnHelper.accessor("receipt", {
      header: () => <span className=" block text-center">Receipt</span>,
      cell: ({ row }) => {
        const orderId = row.original.orderId;

        return (
          <AppButton
            buttonText="View"
            variant="contained"
            width="medium"
            onClick={() => onView(orderId)}
          />
        );
      },
    }),
  ];
};
