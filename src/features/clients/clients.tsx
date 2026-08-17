import AppTable from "@/common/table/table.content";

import CLIENT_MOCK_DATA from "./CLIENTS_MOCK_DATA.json";
import { useClientColumns } from "./columns";
import type { ColumnDef } from "@tanstack/react-table";

export const Clients = () => {
  const columns = useClientColumns();
  return (
    <div>
      <AppTable
        data={CLIENT_MOCK_DATA}
        columns={columns as ColumnDef<ClientTypes>[]}
      />
    </div>
  );
};
