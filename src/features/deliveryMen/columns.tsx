import { createColumnHelper } from "@tanstack/react-table";
import type { DeliveryMenType } from "./deliveryMenTypes";
import { AppButton } from "@/common/appButton/appButton";
import { AppStateCard } from "@/common/appStateCard/appStateCard";

const columnHelper = createColumnHelper<DeliveryMenType>();

export const useDeliveryMenColumns = (
  OnView: (deliverymenId: DeliveryMenType) => void,
) => {
  return [
    columnHelper.accessor("name", {
      header: () => <span>Name</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("telephone", {
      header: () => <span>Telephone</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("email", {
      header: () => <span>Email</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("activityType", {
      header: () => <span>Activity</span>,
      cell: (info) => {
        const activityType = info.getValue();
        return <AppStateCard status={activityType} cardText={activityType} />;
      },
    }),

    columnHelper.accessor("Profile", {
      header: () => <span> Profile</span>,
      cell: (info) => {
        const deliverymenId = info.row.original.id;
        return (
          <AppButton
            buttonText="View"
            variant="contained"
            width="medium"
            onClick={() => onView(deliverymenId)}
          />
        );
      },
    }),
  ];
};
