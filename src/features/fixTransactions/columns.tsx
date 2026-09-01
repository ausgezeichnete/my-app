import { createColumnHelper } from "@tanstack/react-table";
import type { FixTransactionType } from "./fixTransactionsTypes";

const columnHelper = createColumnHelper<FixTransactionType>();

export const useFixTransactionsColumns = () => {
  return [
    columnHelper.accessor("deliveryManName", {
      header: () => (
        <span className=" block text-center">Delivery Man Name</span>
      ),
      cell: (info) => (
        <div className=" block text-center">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("numberOfShipments", {
      header: () => (
        <span className=" block text-center">Number of Shipments</span>
      ),
      cell: (info) => (
        <div className=" block text-center">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("numberOfSales", {
      header: () => <span className=" block text-center">Number of Sales</span>,
      cell: (info) => (
        <div className=" block text-center">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("commission", {
      header: () => <span className=" block text-center">Commission</span>,
      cell: (info) => (
        <div className=" block text-center">{info.getValue()} Euro</div>
      ),
    }),

    columnHelper.accessor("collectedAmount", {
      header: () => (
        <span className=" block text-center">Collected Amount</span>
      ),
      cell: (info) => (
        <div className=" block text-center">{info.getValue()} EGP</div>
      ),
    }),
  ];
};
