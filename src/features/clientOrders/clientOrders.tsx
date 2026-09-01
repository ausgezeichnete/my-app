import AppTable from "@/common/table/table.content";
import CLIENT_ORDERS_MOCK_DATA from "./CLIENT_ORDERS_MOCK_DATA.json";
import CLIENT_MOCK_DATA from "../clients/CLIENTS_MOCK_DATA.json";
import { useClientOrderColumns } from "./columns";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const ClientOrders = () => {
  const { clientId } = useParams<{ clientId: string }>();

  const client = CLIENT_MOCK_DATA.find(
    (client) => client.id === Number(clientId),
  );

  const clientOrders = CLIENT_ORDERS_MOCK_DATA.filter(
    (order) => order.clientId === Number(clientId),
  );

  const [searchQuery, setSearchQuery] = useState("");
  const columns = useClientOrderColumns();
  return (
    <div>
      <h2 className="page-header">
        {client?.name ?? "Unknown Client"}'s Orders (
        {client?.number_of_purchases ?? 0})
      </h2>
      {/* <SearchBox  /> */}
      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />

      <AppTable data={clientOrders} columns={columns} />
    </div>
  );
};
