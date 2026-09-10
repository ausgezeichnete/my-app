import { createColumnHelper } from "@tanstack/react-table";
import type { FixTransactionType } from "./fixTransactionsTypes";
import { AppButton } from "@/common/appButton/appButton";

const columnHelper = createColumnHelper<FixTransactionType>();

export const useFixTransactionsColumns = (
  onView: (transactionId: number) => void,
) => {
  return [
    columnHelper.accessor("deliveryManName", {
      header: () => <span>Delivery Man Name</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("numberOfShipments", {
      header: () => <span>Number of Shipments</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("numberOfSales", {
      header: () => <span>Number of Sales</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("percentage", {
      header: () => <span>percentage</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("totalDue", {
      header: () => <span>total due</span>,
      cell: (info) => <div>{info.getValue()} Euro</div>,
    }),

    columnHelper.accessor("Action", {
      header: () => <span> Action</span>,
      cell: (info) => {
        const transactionId = info.row.original.id;
        return (
          <AppButton
            buttonText="Transafer"
            variant="contained"
            width="medium"
            onClick={() => onView(transactionId)}
          />
        );
      },
    }),
  ];
};
