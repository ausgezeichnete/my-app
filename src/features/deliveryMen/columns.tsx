import { createColumnHelper } from "@tanstack/react-table";
import type { DeliveryMenType } from "./deliveryMenTypes";
import { AppButton } from "@/common/appButton/appButton";
import { AppChip } from "@/common/appChip/appChip";

const columnHelper = createColumnHelper<DeliveryMenType>();

export const useDeliveryMenColumns = () => {
  return [
    columnHelper.accessor("name", {
      header: () => <span className=" block text-center">Name</span>,
      cell: (info) => (
        <div className=" block text-center">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("telephone", {
      header: () => <span className=" block text-center">Telephone</span>,
      cell: (info) => (
        <div className=" block text-center">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("email", {
      header: () => <span className=" block text-center">Email</span>,
      cell: (info) => (
        <div className=" block text-center">{info.getValue()}</div>
      ),
    }),

    columnHelper.accessor("activityType", {
      header: () => <span className=" block text-center">Activity</span>,
      cell: (info) => {
        const activityType = info.getValue();

        return <AppChip chipText={activityType} status={activityType} />;
      },
    }),

    columnHelper.accessor("profile", {
      header: () => <span className=" block text-center">Profile</span>,
      cell: () => (
        <AppButton buttonText="View" variant="contained" width="medium" />
      ),
    }),
  ];
};
