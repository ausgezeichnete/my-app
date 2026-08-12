import AppTable from "@/common/table/table.content";
import type { ColumnDef } from "@tanstack/react-table";

import PRODUCT_ORDER_MOCK_DATA from "./PRODUCT_ORDER_MOCK_DATA.json";
import { useProductOrderColumns } from "./columns";
import type { ProductOrderType } from "./productOrderTypes";

export const ProductOrder = () => {
  const columns = useProductOrderColumns();

  return (
    <div>
      <AppTable
        data={PRODUCT_ORDER_MOCK_DATA}
        columns={columns as ColumnDef<ProductOrderType>[]}
      />
    </div>
  );
};
