import { createColumnHelper } from "@tanstack/react-table";
import type { ProductOrderType } from "./productOrderTypes";
import { AppButton } from "@/common/appButton/appButton";

const columnHelper = createColumnHelper<ProductOrderType>();

export const useProductOrderColumns = () => {
  return [
    columnHelper.accessor("orderNumber", {
      header: () => <span className="block text-center">Order Number</span>,
      cell: (info) => (
        <div className="block text-center">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("clientName", {
      header: () => <span className="block text-center">Client Name</span>,
      cell: (info) => (
        <div className="block text-center">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("product", {
      header: () => <span className="block text-center">Product</span>,
      cell: (info) => (
        <div className="block text-center">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("paymentOption", {
      header: () => <span className="block text-center">Payment</span>,
      cell: (info) => (
        <span
          className={`flex justify-center gap-4 px-2 py-1 rounded-full text-xs w-30 font-medium ${
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
      header: () => <span className="block text-center">Status</span>,
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
            className={`flex justify-center gap-4 px-2 py-1 rounded-full text-xs w-30 font-medium ${
              statusClasses[status] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {status}
          </span>
        );
      },
    }),

    columnHelper.accessor("receipt", {
      header: () => <span className="block text-center">Receipt</span>,
      cell: (info) => {
        return (
          <AppButton buttonText="View" variant="contained" width="medium" />
        );
      },
    }),
  ];
};
