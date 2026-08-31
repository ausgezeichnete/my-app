import { createColumnHelper } from "@tanstack/react-table";

import { AppChip } from "@/common/appChip/appChip";
import { AppButton } from "@/common/appButton/appButton";

import type { ClientOrderType } from "./clientOrders.types";

const columnHelper = createColumnHelper<ClientOrderType>();

export const useClientOrderColumns = () => {
  return [
    columnHelper.accessor("orderNumber", {
      header: () => <span>Order Number</span>,
      cell: (info) => <span className="font-medium">{info.getValue()}</span>,
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

        return (
          <AppChip
            chipText={status}
            status={status}
            className="px-2 py-1 rounded-full text-xs font-medium"
          />
        );
      },
    }),

    columnHelper.accessor("receipt", {
      header: () => <span>Receipt</span>,
      cell: (info) => (
        <AppButton buttonText="View" variant="contained" width="medium" />
      ),
    }),
  ];
};
