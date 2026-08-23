import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./appLayout/appLayout";
import { Clients } from "@/features/clients/clients";
import { ProductOrder } from "@/features/productOrder/productOrder";
import { DeliveryMen } from "@/features/deliveryMen/deliveryMen";
import { Shipment } from "@/features/shipment/shipment";
import { FixTransactions } from "@/features/fixTransactions/fixTransactions";
import { LoginForm } from "@/components/login-form";
import { Reports } from "@/features/reports/reports";
import { Product } from "@/features/productManagement/product";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="clients" element={<Clients />} />
        <Route path="product-orders" element={<ProductOrder />} />
        <Route path="delivery-men" element={<DeliveryMen />} />
        <Route path="shipments" element={<Shipment />} />
        <Route path="fix-transactions" element={<FixTransactions />} />
        <Route path="reports" element={<Reports />} />
        <Route path="product-management" element={<Product />} />
      </Route>
    </Routes>
  );
};
