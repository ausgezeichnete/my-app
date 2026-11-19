import { createColumnHelper } from "@tanstack/react-table";
import { AppButton } from "@/common/appButton/appButton";
import type { AgentType } from "./agentType";
import { AppStateCardSelect } from "@/common/appStateCard/appStateCardSelect";
import type { ComponentProps } from "react";

const columnHelper = createColumnHelper<AgentType>();

export const useAgentsColumns = (OnView: (Id: number) => void) => {
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

    columnHelper.accessor("status", {
      header: () => <span>status</span>,
      cell: (info) => {
        const status = info.getValue() as ComponentProps<
          typeof AppStateCardSelect
        >["status"];
        return (
          <>
            <AppStateCardSelect
              status={status}
              onChange={() => {
                // updateStatus(info.row.original.id, newStatus);
                // handle status change
              }}
            />
          </>
        );
      },
    }),

    columnHelper.accessor("profile", {
      header: () => <span> Profile</span>,
      cell: (info) => {
        const agentId = info.row.original.id;
        return (
          <AppButton
            buttonText="View"
            variant="contained"
            width="short"
            onClick={() => OnView(agentId)}
          />
        );
      },
    }),
  ];
};
