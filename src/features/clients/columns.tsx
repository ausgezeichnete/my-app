import { createColumnHelper } from "@tanstack/react-table";
import { features } from "@/common/table/table.content";
import type { ClientTypes } from "./clients.types";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { AppChip } from "@/common/appChip/appChip";
import { AppButton } from "@/common/appButton/appButton";

const columnHelper = createColumnHelper<typeof features, ClientTypes>();

export const useClientColumns = (onView: (clientId: number) => void) => {
  return [
    columnHelper.accessor("name", {
      header: () => <span>name</span>,
      cell: (info) => {
        return (
          <div className="flex gap-2 justify-center">
            <Avatar>
              <AvatarImage src={info.row.original?.image ?? " "} />
            </Avatar>
            <div>{info.row.original.name}</div>
          </div>
        );
      },
    }),

    columnHelper.accessor("phone", {
      header: () => <span>phone</span>,
      cell: (info) => (
        <div>
          <div>{info.row.original.phone}</div>
        </div>
      ),
    }),
    columnHelper.accessor("email", {
      header: () => <span>email</span>,
      cell: (info) => (
        <div>
          <div>{info.row.original.email}</div>
        </div>
      ),
    }),

    columnHelper.accessor("city", {
      header: () => <span>city</span>,
      cell: (info) => (
        <div>
          <div>{info.row.original.city}</div>
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
        <div>
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
