import AppTable from "@/common/table/table.content";
import type { ColumnDef } from "@tanstack/react-table";

import SHIPMENT_MOCK_DATA from "./SHIPMENT_MOCK_DATA.json";
import { useShipmentColumns } from "./columns";
import type { ShipmentType } from "./shipmentTypes";

export const Shipment = () => {
  const columns = useShipmentColumns();

  return (
    <div>
      <AppTable
        data={SHIPMENT_MOCK_DATA}
        columns={columns as ColumnDef<ShipmentType>[]}
      />
    </div>
  );
};
