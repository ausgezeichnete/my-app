import { createColumnHelper } from "@tanstack/react-table";
import type { ShipmentType } from "./shipmentTypes";

const columnHelper = createColumnHelper<ShipmentType>();

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

        const statusClasses: Record<string, string> = {
          Pending: "bg-yellow-100 text-yellow-700",
          "In Transit": "bg-indigo-100 text-indigo-700",
          "Out for Delivery": "bg-cyan-100 text-cyan-700",
          Delivered: "bg-green-100 text-green-700",
          Delayed: "bg-orange-100 text-orange-700",
          Cancelled: "bg-red-100 text-red-700",
        };

        return (
          <span
            className={`flex justify-start gap-4 px-2 py-1 rounded-full text-xs font-medium ${
              statusClasses[status] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {status}
          </span>
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
