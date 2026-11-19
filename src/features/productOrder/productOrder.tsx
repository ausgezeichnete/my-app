import AppTable from "@/common/table/table.content";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import PRODUCT_ORDER_MOCK_DATA from "./PRODUCT_ORDER_MOCK_DATA.json";
import { useProductOrderColumns } from "./columns";
import { useSearchableTable } from "@/hooks/useSearchableTable";

import { useNavigate } from "react-router-dom";

export const ProductOrder = () => {
  const navigate = useNavigate();
  const columns = useProductOrderColumns((orderId) => {
    navigate(`/order-details/${orderId}`);
  });
  const { searchQuery, setSearchQuery, filteredData } = useSearchableTable(
    PRODUCT_ORDER_MOCK_DATA,
  );

  return (
    <div>
      <h2>Product Orders</h2>
      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      <AppTable data={filteredData} columns={columns} />
    </div>
  );
};
