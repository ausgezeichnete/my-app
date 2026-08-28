import AppTable from "@/common/table/table.content";
import CLIENT_MOCK_DATA from "./CLIENTS_MOCK_DATA.json";
import { useClientColumns } from "./columns";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Clients = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const columns = useClientColumns((clientId) => {
    navigate(`/client-orders/${clientId}`);
  });

  return (
    <div>
      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />

      <AppTable data={CLIENT_MOCK_DATA} columns={columns} />
    </div>
  );
};
