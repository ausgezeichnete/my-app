import AppTable from "@/common/table/table.content";
import SHIPMENT_MOCK_DATA from "./SHIPMENT_MOCK_DATA.json";
import { useShipmentColumns } from "./columns";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import { useNavigate } from "react-router-dom";
import { useSearchableTable } from "@/hooks/useSearchableTable";

export const Shipment = () => {
  const { searchQuery, setSearchQuery, filteredData } =
    useSearchableTable(SHIPMENT_MOCK_DATA);

  const navigate = useNavigate();

  const columns = useShipmentColumns((shipmentId) => {
    navigate(`/shipment-order/${shipmentId}`);
  });
  return (
    <div>
      <h2>Shipments</h2>
      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      <AppTable data={filteredData} columns={columns} />
    </div>
  );
};
