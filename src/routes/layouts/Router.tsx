import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./appLayout/appLayout";
import { Clients } from "@/features/clients/clients";
import { ProductOrder } from "@/features/productOrder/productOrder";
import { Shipment } from "@/features/shipment/shipment";
import { FixTransactions } from "@/features/fixTransactions/fixTransactions";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="clients" element={<Clients />} />
        <Route path="product-orders" element={<ProductOrder />} />
        <Route path="shipments" element={<Shipment />} />
        <Route path="fix-transactions" element={<FixTransactions />} />
      </Route>
    </Routes>
  );
};
