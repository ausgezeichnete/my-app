import AppTable from "@/common/table/table.content";
import type { ColumnDef } from "@tanstack/react-table";

import DELIVERY_MEN_MOCK_DATA from "./DELIVERY_MEN_MOCK_DATA.json";
import { useDeliveryMenColumns } from "./columns";
import type { DeliveryMenType } from "./deliveryMenTypes";

export const DeliveryMen = () => {
  const columns = useDeliveryMenColumns();

  return (
    <div className="w-full">
      <AppTable
        data={DELIVERY_MEN_MOCK_DATA}
        columns={columns as ColumnDef<DeliveryMenType>[]}
      />
    </div>
  );
};
