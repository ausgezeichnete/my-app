import { createColumnHelper } from "@tanstack/react-table";
import type { ProductOrderType } from "./productOrderTypes";

const columnHelper = createColumnHelper<ProductOrderType>();

export const useProductOrderColumns = () => {
  return [
    columnHelper.accessor("orderNumber", {
      header: () => <span>Order Number</span>,
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

    columnHelper.accessor("product", {
      header: () => <span>Product</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("paymentOption", {
      header: () => <span>Payment</span>,
      cell: (info) => (
        <span
          className={`flex justify-start gap-4 px-2 py-1 rounded-full text-xs font-medium ${
            info.getValue() === "Online"
              ? "bg-blue-100 text-blue-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {info.getValue()}
        </span>
      ),
    }),

    columnHelper.accessor("orderStatus", {
      header: () => <span>Status</span>,
      cell: (info) => {
        const status = info.getValue();

        const statusClasses: Record<string, string> = {
          Pending: "bg-yellow-100 text-yellow-700",
          Processing: "bg-indigo-100 text-indigo-700",
          Shipped: "bg-purple-100 text-purple-700",
          "Out for Delivery": "bg-cyan-100 text-cyan-700",
          Delivered: "bg-green-100 text-green-700",
          Cancelled: "bg-red-100 text-red-700",
          Returned: "bg-gray-100 text-gray-700",
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

    columnHelper.accessor("receipt", {
      header: () => <span>Receipt</span>,
      cell: (info) =>
        info.getValue() ? (
          <button className="text-blue-600 hover:underline flex justify-start gap-4">
            View Receipt
          </button>
        ) : (
          <span className="text-gray-400 flex justify-start gap-4">
            Not Available
          </span>
        ),
    }),
  ];
};
