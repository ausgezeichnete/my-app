import { createColumnHelper } from "@tanstack/react-table";
import type { ClientTypes } from "./clients.types";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { AppChip } from "@/common/appChip/appChip";
import { AppButton } from "@/common/appButton/appButton";

const columnHelper = createColumnHelper<ClientTypes>();

export const useClientColumns = (onView: (clientId: number) => void) => {
  return [
    columnHelper.accessor("name", {
      header: () => <span>name</span>,
      cell: (info) => (
        <div className="flex justify-start items-center gap-4">
          <Avatar>
            <AvatarImage src={info.row.original.image} />
          </Avatar>
          <div>{info.row.original.name}</div>
          {/* <div>{info.getValue()}</div> */}
        </div>
      ),
    }),

    columnHelper.accessor("phone", {
      header: () => <span>phone</span>,
      cell: (info) => (
        <div className="flex justify-start items-center gap-4">
          <div>{info.row.original.phone}</div>
          {/* <div>{info.getValue()}</div> */}
        </div>
      ),
    }),
    columnHelper.accessor("email", {
      header: () => <span>email</span>,
      cell: (info) => (
        <div className="flex justify-start items-center gap-4">
          <div>{info.row.original.email}</div>
          {/* <div>{info.getValue()}</div> */}
        </div>
      ),
    }),

    columnHelper.accessor("city", {
      header: () => <span>city</span>,
      cell: (info) => (
        <div className="flex justify-start items-center gap-4">
          <div>{info.row.original.city}</div>
          {/* <div>{info.getValue()}</div> */}
        </div>
      ),
    }),
    columnHelper.accessor("status", {
      header: () => <span>Status</span>,

      cell: (info) => {
        const status = info.getValue();
        return <AppChip chipText={status} status={status} />;
      },
    }),
    columnHelper.accessor("number_of_purchases", {
      header: () => <span>Purchase</span>,
      cell: (info) => (
        <div className="flex justify-start items-center gap-4">
          <div>{info.getValue()}</div>
        </div>
      ),
    }),
    columnHelper.display({
      id: "profile",
      header: () => <span>Profile</span>,
      cell: ({ row }) => {
        const clientId = row.original.id;

        return (
          <AppButton
            buttonText="View"
            variant="contained"
            width="medium"
            onClick={() => onView(clientId)}
          />
        );
      },
    }),
  ];
};
