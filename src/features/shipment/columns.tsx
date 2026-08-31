import { createColumnHelper } from "@tanstack/react-table";
import type { ShipmentType } from "./shipmentTypes";
import { AppChip } from "@/common/appChip/appChip";

const columnHelper = createColumnHelper<ShipmentType>();

const shipmentStatusTitles: Record<ShipmentType["shipmentStatus"], string> = {
  pending: "Pending",
  inTransit: "In Transit",
  outForDelivery: "Out for Delivery",
  delivered: "Delivered",
  delayed: "Delayed",
  cancelled: "Cancelled",
};

export const useShipmentColumns = () => {
  return [
    columnHelper.accessor("shipmentNumber", {
      header: () => <span>Shipment Number</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("clientName", {
      header: () => <span>Client Name</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("address", {
      header: () => <span>Address</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("deliveryMan", {
      header: () => <span>Delivery Man</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("shippingDeliveryDate", {
      header: () => <span>Shipping / Delivery Date</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("shipmentStatus", {
      header: () => <span>Status</span>,
      cell: (info) => {
        const status = info.getValue();
        const title = shipmentStatusTitles[status];

        return (
          <AppChip
            chipText={title}
            status={status}
            className="justify-start gap-4 px-2 py-1 rounded-full text-xs text-center font-medium"
          />
        );
      },
    }),

    columnHelper.accessor("shipmentDetails", {
      header: () => <span>Shipment Details</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4">{info.getValue()}</div>
      ),
    }),
  ];
};
