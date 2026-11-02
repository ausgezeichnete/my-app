import AppTable from "@/common/table/table.content";
import { useGetClients } from "./apis/useGetClients";
import { useClientColumns } from "./columns";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { ClientTypes } from "./clients.types";
import type { ColumnDef } from "@tanstack/react-table";
import { useDebounce } from "@/hooks/useDebounce";

export const Clients = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncdSearchQuery = useDebounce(searchQuery, 500);
  const { data, isPending, isFetchingNextPage, hasNextPage, ref } =
    useGetClients(debouncdSearchQuery);

  const clients = data?.pages.flat() ?? [];
  // const visibleClients = search.trim() ? filteredClients : clients;
  console.log(data);

  const navigate = useNavigate();

  const columns = useClientColumns((clientId) => {
    navigate(`/client-orders/${clientId}`);
  });

  return (
    <div>
      <h2>Clients</h2>
      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />

      <>
        <AppTable
          data={clients}
          columns={columns as ColumnDef<ClientTypes>[]}
          isLoading={isPending}
          paginationRef={ref}
        />
        {hasNextPage && (
          <div ref={ref} className="py-4 text-center" aria-live="polite">
            {isFetchingNextPage ? "Loading more clients..." : null}
          </div>
        )}
      </>
    </div>
  );
};
