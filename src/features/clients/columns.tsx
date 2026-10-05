import { createColumnHelper } from "@tanstack/react-table";
import type { ClientTypes } from "./clients.types";
import { features } from "@/common/table/table.content";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { AppButton } from "@/common/appButton/appButton";
import { AppStateCard } from "@/common/appStateCard/appStateCard";

const columnHelper = createColumnHelper<typeof features, ClientTypes>();

export const useClientColumns = (onView: (clientId: number) => void) => {
  return [
    columnHelper.accessor("name", {
      header: () => <span>Name</span>,
      cell: (info) => {
        const client = info.row.original;

        return (
          <div className="flex gap-2 items-center justify-center">
            <Avatar>
              <AvatarImage src={client.image || undefined} />
            </Avatar>

            <div>{client.name}</div>
          </div>
        );
      },
    }),

    columnHelper.accessor("phone", {
      header: () => <span>Phone</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("email", {
      header: () => <span>Email</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("status", {
      header: () => <span>Status</span>,
      cell: (info) => {
        const status = info.getValue();

        if (status !== 0 && status !== 1) {
          return <span>{status}</span>;
        }

        const isActive = status === 1;

        return (
          <AppStateCard
            cardText={isActive ? "Active" : "Inactive"}
            status={isActive ? "active" : "inActive"}
            className="px-2 py-1 rounded-full text-xs font-medium block text-center"
          />
        );
      },
    }),

    columnHelper.accessor("number_of_purchases", {
      header: () => <span>Purchases</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("number_of_products", {
      header: () => <span>Products</span>,
      cell: (info) => <div>{info.getValue()}</div>,
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
            width="short"
            onClick={() => onView(clientId)}
          />
        );
      },
    }),
  ];
};
