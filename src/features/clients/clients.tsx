import AppTable from "@/common/table/table.content"

import CLIENT_MOCK_DATA from "./CLIENTS_MOCK_DATA.json"
import type { ColumnDef } from "@tanstack/react-table"
import type { CLientTypes } from "./clients.types"
import { columns } from "@/common/table/columns"

export const Clients = () => {
  return (
    <div>
      <AppTable data={CLIENT_MOCK_DATA} 
      columns={columns as ColumnDef<CLientTypes>}/>
    </div>
  )
}

