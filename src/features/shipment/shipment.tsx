import AppTable from "@/common/table/table.content";
import SHIPMENT_MOCK_DATA from "./SHIPMENT_MOCK_DATA.json";
import { useShipmentColumns } from "./columns";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Shipment = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const filteredData = SHIPMENT_MOCK_DATA.filter((shipment) =>
    shipment.shipmentNumber.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
