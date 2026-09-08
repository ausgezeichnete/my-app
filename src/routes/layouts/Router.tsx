import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./appLayout/appLayout";
import { Clients } from "@/features/clients/clients";
import { ClientOrders } from "@/features/clientOrders/clientOrders";
import { ProductOrder } from "@/features/productOrder/productOrder";
import { DeliveryMen } from "@/features/deliveryMen/deliveryMen";
import { Shipment } from "@/features/shipment/shipment";
import { FixTransactions } from "@/features/fixTransactions/fixTransactions";
import { LoginForm } from "@/components/login-form";
import { Reports } from "@/features/reports/reports";
import { Product } from "@/features/productManagement/product";
import { OrderDetails } from "@/features/orderDetails/orderDetails";
import { HomePage } from "@/features/home/homePage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="login" element={<LoginForm />} />
        <Route index element={<HomePage />} />
        <Route path="clients" element={<Clients />} />
        <Route path="client-orders/:clientId" element={<ClientOrders />} />
        <Route path="product-orders" element={<ProductOrder />} />
        <Route path="delivery-men" element={<DeliveryMen />} />
        <Route path="shipments" element={<Shipment />} />
        <Route path="fix-transactions" element={<FixTransactions />} />
        <Route path="reports" element={<Reports />} />
        <Route path="order-details/:id" element={<OrderDetails />} />
        <Route path="product-management" element={<Product />} />
      </Route>
    </Routes>
  );
};
