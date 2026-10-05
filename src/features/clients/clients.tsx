import AppTable from "@/common/table/table.content";
import { useGetClients } from "./apis/useGetClients";
import { useClientColumns } from "./columns";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import type { ClientTypes } from "./clients.types";

const CLIENT_SEARCH_FIELDS: (keyof ClientTypes)[] = [
  "id",
  "name",
  "phone",
  "email",
  "status",
  "number_of_purchases",
  "number_of_products",
];

export const Clients = () => {
  const [search, setSearch] = useState("");
  const [filteredClients, setFilteredClients] = useState<ClientTypes[]>([]);

  const { data, isPending, isError, isFetchingNextPage, hasNextPage, ref } =
    useGetClients("");

  const clients = useMemo(() => data?.pages.flat() ?? [], [data?.pages]);
  const visibleClients = search.trim() ? filteredClients : clients;

  const navigate = useNavigate();

  const columns = useClientColumns((clientId) => {
    navigate(`/client-orders/${clientId}`);
  });

  return (
    <div>
      <h2>Clients</h2>
      <AppSearchBar
        query={search}
        onQueryChange={setSearch}
        searchableData={clients}
        searchableFields={CLIENT_SEARCH_FIELDS}
        onFilteredDataChange={setFilteredClients}
      />

      {isPending ? (
        <p role="status">Loading clients...</p>
      ) : isError ? (
        <p role="alert">Unable to load clients.</p>
      ) : visibleClients.length === 0 ? (
        <p>No clients found.</p>
      ) : (
        <>
          <AppTable data={visibleClients} columns={columns} />
          {hasNextPage && (
            <div ref={ref} className="py-4 text-center" aria-live="polite">
              {isFetchingNextPage ? "Loading more clients..." : null}
            </div>
          )}
        </>
      )}
    </div>
  );
};
