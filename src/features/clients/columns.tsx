import { createColumnHelper } from "@tanstack/react-table";
import type { ClientTypes } from "./clients.types";
import { features } from "@/common/table/table.content";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { AppButton } from "@/common/appButton/appButton";
import { AppStateCard } from "@/common/appStateCard/appStateCard";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";
// TODO:: Check why this got a wierd message ?? with on args typeof features,
const columnHelper = createColumnHelper<typeof features, ClientTypes>();

export const useClientColumns = (
  onStatusChangeRequest: (client: ClientTypes, newStatus: number) => void,
) => {
  const navigate = useNavigate();
  return [
    columnHelper.accessor("name", {
      header: () => <span>{t("clients.name")}</span>,
      cell: (info) => {
        const client = info.row.original;
        return (
          <div className="flex gap-2 items-center justify-center">
            <Avatar>
              <AvatarImage src={client?.image || undefined} />
            </Avatar>

            <div>{info.getValue() ?? "------"}</div>
          </div>
        );
      },
    }),

    columnHelper.accessor("phone", {
      header: () => (
        <span className="flex justify-center">{t("clients.phone")}</span>
      ),
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("email", {
      header: () => <span>Email</span>,
      cell: (info) => <div>info.getValue()</div>,
    }),
    columnHelper.accessor("country.name", {
      header: () => <span>City</span>,
      cell: (info) => <div>info.getValue()</div>,
    }),

    columnHelper.accessor("type", {
      header: () => <span>{t("clients.payment_method")}</span>,
      cell: (info) => info.getValue(),
    }),

    columnHelper.accessor("status", {
      header: () => <span>{t("clients.payment_method")}</span>,
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
