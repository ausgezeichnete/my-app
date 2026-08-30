import { createColumnHelper } from "@tanstack/react-table";
import type { DeliveryMenType } from "./deliveryMenTypes";
import { AppButton } from "@/common/appButton/appButton";
import { AppChip } from "@/common/appChip/appChip";

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
      header: () => <span>Activity</span>,
      cell: (info) => {
        const activityType = info.getValue();

        return <AppChip chipText={activityType} status={activityType} />;
      },
    }),

    columnHelper.accessor("profile", {
      header: () => <span>Profile</span>,
      cell: (info) => (
        <AppButton buttonText="View" variant="contained" width="medium" />
      ),
    }),
  ];
};
