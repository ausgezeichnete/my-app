import { createColumnHelper } from "@tanstack/react-table";
import type { ClientTypes } from "./clients.types";
import { features } from "@/common/table/table.content";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { AppButton } from "@/common/appButton/appButton";
import { t } from "i18next";
import { StatusSelect } from "./statusSelect";
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
      cell: (info) => <div>{info.getValue()}</div>,
    }),
    columnHelper.accessor("country.name", {
      header: () => <span>City</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("number_of_purchases", {
      header: () => <span>{t("purchases")}</span>,
      cell: (info) => <div>{info.getValue()}</div>,
    }),

    columnHelper.accessor("status", {
      header: () => <span>{t("status")}</span>,
      cell: (info) => (
        <StatusSelect
          value={info.row.original.status}
          onChange={(newStatus) => {
            onStatusChangeRequest(info.row.original, newStatus);
          }}
        />
      ),
    }),

    columnHelper.display({
      id: "profile",
      header: () => <span>{t("profile")}</span>,
      cell: (params) => {
        const clientId = params?.row?.original?.id;
        return (
          <div>
            <AppButton
              width="short"
              buttonText="show"
              onClick={() => {
                navigate(`/client-orders/${clientId}`, {
                  state: {
                    ...params.row.original,
                  },
                });
              }}
            />
          </div>
        );
      },
    }),
  ];
};
