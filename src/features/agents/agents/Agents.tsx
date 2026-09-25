import AppTable from "@/common/table/table.content";

import AGENTS_MOCK_DATA from "./AGENTS_MOCK_DATA.json";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { useAgentsColumns } from "./columns";
import { useSearchableTable } from "@/hooks/useSearchableTable";
import { useNavigate } from "react-router-dom";

export const Agents = () => {
  const navigate = useNavigate();
  const columns = useAgentsColumns((agentId) => {
    navigate(`/agent-profile/${agentId}`);
  });
  //filter the data based on the search query
  const { searchQuery, setSearchQuery, filteredData } =
    useSearchableTable(AGENTS_MOCK_DATA);

  return (
    <div className="w-full">
      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      <AppTable data={filteredData} columns={columns} />
    </div>
  );
};
