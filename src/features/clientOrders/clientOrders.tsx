import AppTable from "@/common/table/table.content";
import CLIENT_ORDERS_MOCK_DATA from "./CLIENT_ORDERS_MOCK_DATA.json";
import CLIENT_MOCK_DATA from "../clients/CLIENTS_MOCK_DATA.json";
import { useClientOrderColumns } from "./columns";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { useEntityFromParams } from "@/hooks/useEntityFromParams";
import { useSearchableTable } from "@/hooks/useSearchableTable";
import { useRowNavigation } from "@/hooks/useRowNavigation";

// This component displays a list of orders for a specific client.
// It uses the useEntityFromParams hook to get the client ID from the URL parameters and fetch the corresponding client data from CLIENT_MOCK_DATA.
export const ClientOrders = () => {
  const { id: clientId, entity: client } = useEntityFromParams(
    CLIENT_MOCK_DATA,
    "clientId",
  );
  // Use the useRowNavigation hook to handle row navigation
  const handleViewOrder = useRowNavigation("/order-details");
  // Get the columns for the table, passing the handleViewOrder function to handle the "View" button click
  const columns = useClientOrderColumns(handleViewOrder);

  // Filter orders for the specific client
  const allOrders = CLIENT_ORDERS_MOCK_DATA.filter(
    (order) => order.clientId === clientId,
  );

  // Use the useSearchableTable hook to manage search functionality
  const { searchQuery, setSearchQuery, filteredData } = useSearchableTable(
    allOrders,
    (order, q) => order.id.toString().includes(q),
  );

  return (
    <div>
      <div className="flex justify-between">
        <h2 className=" flex justify-between ">
          {client?.image && (
            <img
              src={client.image}
              alt={client.name}
              className="w-10 h-10 rounded-full object-cover mr-2"
            />
          )}
          {client?.name ?? "Unknown Client"}'s Orders (
          {client?.number_of_purchases ?? 0})
        </h2>
        <button
          type="button"
          className=" hover:text-foreground cursor-pointer mr-2"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      <AppTable data={filteredData} columns={columns} />
    </div>
  );
};
