import AppTable from "@/common/table/table.content";
import type { ColumnDef } from "@tanstack/react-table";

import DELIVERY_MEN_MOCK_DATA from "./DELIVERY_MEN_MOCK_DATA.json";
import { useDeliveryMenColumns } from "./columns";
import type { DeliveryMenType } from "./deliveryMenTypes";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";

export const DeliveryMen = () => {
  const columns = useDeliveryMenColumns();

  return (
    <div className="w-full">
      <h2>Delivery Men</h2>
      <div className="flex gap-4.5">
        {" "}
        <h3 className="flex justify-between mt-1 mb-3 border-b-2 border-highlight-green">
          Records{" "}
        </h3>
        <h3 className="flex gap-4.5">
          Requests
          <div className="size-5 rounded-full flex items-center justify-center bg-error text-white">
            <span className="text-xs">45</span>
          </div>
        </h3>
      </div>
      <AppSearchBar />
      <AppTable
        data={DELIVERY_MEN_MOCK_DATA}
        columns={columns as ColumnDef<DeliveryMenType>[]}
      />
    </div>
  );
};
