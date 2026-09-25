import { createColumnHelper } from "@tanstack/react-table";
import type { ReceivablesType } from "./ReceivablesTypes";
import { AppButton } from "@/common/appButton/appButton";

const columnHelper = createColumnHelper<ReceivablesType>();

export const useReceivablesColumns = (
  onView: (transactionId: number) => void,
) => {
  return [
    columnHelper.accessor("agentName", {
      header: () => <span> Agent Name</span>,
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
      cell: (info) => <div>{info.getValue()} % </div>,
    }),

    columnHelper.accessor("totalDue", {
      header: () => <span>total due</span>,
      cell: (info) => <div>{info.getValue()} Euro</div>,
    }),

    columnHelper.accessor("Actions", {
      header: () => <span> Action</span>,
      cell: (info) => {
        const Id = info.row.original.id;
        return (
          <AppButton
            buttonText="Transafer"
            variant="contained"
            width="short"
            onClick={() => onView(Id)}
          />
        );
      },
    }),
  ];
};
