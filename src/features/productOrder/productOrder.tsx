import AppTable from "@/common/table/table.content";
import { AppSearchBar } from "@/common/appSearchBar/appSearchBar";
import PRODUCT_ORDER_MOCK_DATA from "./PRODUCT_ORDER_MOCK_DATA.json";
import { useProductOrderColumns } from "./columns";
import type { ProductOrderType } from "./productOrderTypes";
import { useState } from "react";
import { useRowNavigation } from "@/hooks/useRowNavigation";

export const ProductOrder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const query = searchQuery.trim().toLowerCase();

  const filteredData: ProductOrderType[] = (
    PRODUCT_ORDER_MOCK_DATA as ProductOrderType[]
  ).filter(
    (order) =>
      order.orderNumber.toLowerCase().includes(query) ||
      order.clientName.toLowerCase().includes(query) ||
      order.product.toLowerCase().includes(query),
  );

  // Navigate to the order details page when a row's "View" action is clicked
  const handleViewOrder = useRowNavigation("/order-details");

  // Columns for the table, wired to the navigation handler above
  const columns = useProductOrderColumns(handleViewOrder);

  return (
    <div>
      <h2 className="page-header">Product Orders</h2>
      <AppSearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      <AppTable data={filteredData} columns={columns} />
    </div>
  );
};
