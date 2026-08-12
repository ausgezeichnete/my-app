import { createColumnHelper } from "@tanstack/react-table";
import type { DeliveryMenType } from "./deliveryMenTypes";

const columnHelper = createColumnHelper<DeliveryMenType>();

export const useDeliveryMenColumns = () => {
  return [
    columnHelper.accessor("name", {
      header: () => <span>Name</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4 whitespace-nowrap">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor("telephone", {
      header: () => <span>Telephone</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4 whitespace-nowrap">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor("email", {
      header: () => <span>Email</span>,
      cell: (info) => (
        <div className="flex justify-start gap-4 whitespace-nowrap">
          {info.getValue()}
        </div>
      ),
    }),

    columnHelper.accessor("activityType", {
      header: () => <span>Activity Type</span>,
      cell: (info) => {
        const activityType = info.getValue();

        const activityClasses: Record<string, string> = {
          "Full Time": "bg-green-100 text-green-700",
          "Part Time": "bg-blue-100 text-blue-700",
          Contract: "bg-orange-100 text-orange-700",
        };

        return (
          <span
            className={`flex justify-start gap-4 px-2 py-1 rounded-full text-xs font-medium ${
              activityClasses[activityType] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {activityType}
          </span>
        );
      },
    }),

    columnHelper.accessor("profile", {
      header: () => <span>Profile</span>,
      cell: (info) => (
        <div className="max-w-[300px] whitespace-normal break-words">
          {info.getValue()}
        </div>
      ),
    }),
  ];
};
