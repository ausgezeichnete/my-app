import { createColumnHelper } from "@tanstack/react-table";
import type { FixTransactionType } from "./fixTransactionsTypes";

const columnHelper = createColumnHelper<FixTransactionType>();

export const useFixTransactionsColumns = () => {
  return [
    columnHelper.accessor("deliveryManName", {
      header: () => <span>Delivery Man Name</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("numberOfShipments", {
      header: () => <span>Number of Shipments</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("numberOfSales", {
      header: () => <span>Number of Sales</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("commission", {
      header: () => <span>Commission</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4">{info.getValue()} EGP</div>
      ),
    }),

    columnHelper.accessor("collectedAmount", {
      header: () => <span>Collected Amount</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4 font-medium">
          {info.getValue()} EGP
        </div>
      ),
    }),
  ];
};
