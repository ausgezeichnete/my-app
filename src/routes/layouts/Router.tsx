import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./appLayout/appLayout";
import { Clients } from "@/features/clients/clients";
import { ProductOrder } from "@/features/productOrder/productOrder";
import { FixTransactions } from "@/features/fixTransactions/fixTransactions";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="clients" element={<Clients />} />
        <Route path="product-orders" element={<ProductOrder />} />
        <Route path="fix-transactions" element={<FixTransactions />} />
      </Route>
    </Routes>
  );
};
