import AppTable from "@/common/table/table.content";
import { useGetClients } from "./apis/useGetClients";
import { useClientColumns } from "./columns";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { ClientTypes } from "./clients.types";
import type { ColumnDef } from "@tanstack/react-table";
import { useDebounce } from "@/hooks/useDebounce";
import { LayoutTitle } from "@/common/layoutTitle/layoutTitle";
import { ConfirmStatusModal } from "./confirmStatusModal";
import { AppHeader } from "@/common/appHeader/appHeader";

export const Clients = () => {
  const [statusModal, setStatusModal] = useState<{
    isOpen: boolean;
    client: ClientTypes | null;
    newStatus: number | null;
  }>({
    isOpen: false,
    client: null,
    newStatus: null,
  });

  const handleStatusChangeRequest = (
    client: ClientTypes,
    newStatus: number,
  ) => {
    if (client.status === newStatus) return;
    setStatusModal({
      isOpen: true,
      client,
      newStatus,
    });
  };
  const handleConfirmStatusChange = () => {
    setStatusModal((prev) => ({ ...prev, isOpen: false }));
  };

  const columns = useClientColumns(handleStatusChangeRequest);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncdSearchQuery = useDebounce(searchQuery, 500);
  const { data, isPending, isFetchingNextPage, hasNextPage, ref } =
    useGetClients(debouncdSearchQuery);

  const clients = data?.pages.flat() ?? [];
  // const visibleClients = search.trim() ? filteredClients : clients;
  console.log(data);

  // const navigate = useNavigate();

  // const columns = useClientColumns((clientId) => {
  //   navigate(`/client-orders/${clientId}`);
  // });

  return (
    <div>
      <LayoutTitle title="Clients" />
      <AppHeader title="Try Header" />
      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />

      <>
        <AppTable<ClientTypes>
          data={clients}
          columns={columns as ColumnDef<ClientTypes, any>[]}
          isLoading={isPending}
          paginationRef={ref}
        />
        {hasNextPage && (
          <div ref={ref} className="py-4 text-center" aria-live="polite">
            {isFetchingNextPage ? "Loading more clients..." : null}
          </div>
        )}

        <ConfirmStatusModal
          isOpen={statusModal.isOpen}
          client={statusModal.client as ClientTypes | null}
          newStatus={statusModal.newStatus as 0 | 1 | null}
          onClose={() => setStatusModal((prev) => ({ ...prev, isOpen: false }))}
          onConfirm={handleConfirmStatusChange}
        />
      </>
    </div>
  );
};
