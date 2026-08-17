import AppTable from "@/common/table/table.content";

import CLIENT_MOCK_DATA from "./CLIENTS_MOCK_DATA.json";
import { useClientColumns } from "./columns";
import type { ColumnDef } from "@tanstack/react-table";
import SearchBox from "@/common/appSearch/appSearch";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { useState } from "react";

export const Clients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const columns = useClientColumns();
  return (
    <div>
      {/* <SearchBox  /> */}
      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />

      <AppTable
        data={CLIENT_MOCK_DATA}
        columns={columns as ColumnDef<ClientTypes>[]}
      />
      {/* {console.log(searchQuery)} */}
      {console.log(setSearchQuery)}
    </div>
  );
};
