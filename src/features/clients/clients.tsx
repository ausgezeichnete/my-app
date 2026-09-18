import AppTable from "@/common/table/table.content";
import CLIENT_MOCK_DATA from "./CLIENTS_MOCK_DATA.json";
import { useClientColumns } from "./columns";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { useNavigate } from "react-router-dom";
import { useSearchableTable } from "@/hooks/useSearchableTable";

export const Clients = () => {
  const navigate = useNavigate();

  const columns = useClientColumns((clientId) => {
    navigate(`/client-orders/${clientId}`);
  });

  //filter the data based on the search query
  const { searchQuery, setSearchQuery, filteredData } =
    useSearchableTable(CLIENT_MOCK_DATA);

  return (
    <div>
      <h2>Clients</h2>
      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />

      <AppTable data={filteredData} columns={columns} />
    </div>
  );
};
