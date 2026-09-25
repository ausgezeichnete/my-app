import AppTable from "@/common/table/table.content";
import { useReceivablesColumns } from "./columns";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import RECEIVABLES_MOCK_DATA from "./RECEIVABLES_MOCK_DATA.json";
import { useState } from "react";

export const Receivables = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const columns = useReceivablesColumns();

  return (
    <div>
      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />

      <AppTable data={RECEIVABLES_MOCK_DATA} columns={columns} />
    </div>
  );
};
