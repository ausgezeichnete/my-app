import { createColumnHelper } from "@tanstack/react-table";
import type { ClientTypes } from "./clients.types";
import { AvatarImage, Avatar } from "@/components/ui/avatar";

const columnHelper = createColumnHelper<ClientTypes>();

export const useClientColumns = () => {
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
  ];
};
