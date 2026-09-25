import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./appLayout/appLayout";
import { Clients } from "@/features/clients/clients";
import { ClientOrders } from "@/features/clientOrders/clientOrders";
import { ProductOrder } from "@/features/productOrder/productOrder";
import { Shipment } from "@/features/shipment/shipment";
import { LoginForm } from "@/components/login-form";
import { Reports } from "@/features/reports/reports";
import { OrderDetails } from "@/features/orderDetails/orderDetails";
import { HomePage } from "@/features/home/HomePage";
import { ShipmentOrder } from "@/features/ShipmentOrder/ShipmentOrder";

import { ProductForm } from "@/features/ProductForm/ProductForm";
import { ProductsManagement } from "@/features/products/productsManagment";
import { ProductCategorization } from "@/features/products/categories/productCategorization";
import { AgentsManagement } from "@/features/agents/AgentsManagement";
//import { AgentsRequests } from "@/features/agents/agentsRequests/agentsRequests";
import { TransactionsManagement } from "@/features/transactions/TransactionsManagement";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="login" element={<LoginForm />} />
        <Route index element={<HomePage />} />
        <Route path="clients" element={<Clients />} />
        <Route path="client-orders/:clientId" element={<ClientOrders />} />
        <Route path="product-orders" element={<ProductOrder />} />
        <Route path="shipments" element={<Shipment />} />
        <Route path="shipment-order/:shipmentId" element={<ShipmentOrder />} />
        <Route path="agents" element={<AgentsManagement />} />
        <Route path="transactions" element={<TransactionsManagement />} />
        <Route path="reports" element={<Reports />} />
        <Route path="order-details/:id" element={<OrderDetails />} />
        <Route path="product-management" element={<ProductsManagement />} />
        <Route path="product/add-new-product" element={<ProductForm />} />
        <Route path="product/categories" element={<ProductCategorization />} />
      </Route>
    </Routes>
  );
};
