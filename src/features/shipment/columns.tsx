import { createColumnHelper } from "@tanstack/react-table";
import type { ShipmentType } from "./shipmentTypes";
import { AppStateCard } from "@/common/appStateCard/appStateCard";
import { AppButton } from "@/common/appButton/appButton";

const columnHelper = createColumnHelper<ShipmentType>();

export const useShipmentColumns = (
  onView: (shipmentId: ShipmentType) => void,
) => {
  return [
    columnHelper.accessor("shipmentNumber", {
      header: () => <span>Shipment Number</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("clientName", {
      header: () => <span>Client Name</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("address", {
      header: () => <span>Address</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("deliveryMan", {
      header: () => <span>Delivery Man</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("shippingDeliveryDate", {
      header: () => <span>Shipping / Delivery Date</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("shipmentStatus", {
      header: () => <span>Status</span>,
      cell: (info) => {
        const status = info.getValue();

        return <AppStateCard status={status} cardText={status} />;
      },
    }),

    columnHelper.accessor("shipmentDetails", {
      header: () => <span>Shipment Details</span>,
      cell: (info) => {
        const shipmentId = info.row.original.id;
        return (
          <AppButton
            buttonText="View"
            variant="contained"
            width="medium"
            onClick={() => onView(shipmentId)}
          />
        );
      },
    }),
  ];
};
