import {
  Home,
  Users,
  PackageCheck,
  Truck,
  UserCheck,
  CircleDollarSign,
  PackageSearch,
  FileText,
  Settings,
  LogOut,
  LogIn,
} from "lucide-react";

export const items = [
  {
    id: "main",
    title: "sidebar.main",
    url: "/",
    icon: Home,
  },
  {
    id: "clients",
    title: "sidebar.clients",
    url: "/clients",
    icon: Users,
  },
  {
    id: "product_orders",
    title: "sidebar.product_orders",
    url: "/product-orders",
    icon: PackageCheck,
  },
  {
    id: "shipments",
    title: "sidebar.shipments",
    url: "/shipments",
    icon: Truck,
  },
  {
    id: "delivery_men",
    title: "sidebar.delivery_men",
    url: "/delivery-men",
    icon: UserCheck,
  },
  {
    id: "fix-transactions",
    title: "sidebar.transactions",
    url: "/fix-transactions",
    icon: CircleDollarSign,
  },
  {
    id: "product_management",
    title: "sidebar.product_management",
    url: "/product-management",
    icon: PackageSearch,
  },
  {
    id: "reports",
    title: "sidebar.reports",
    url: "/reports",
    icon: FileText,
  },
  {
    id: "settings",
    title: "sidebar.settings",
    url: "/settings",
    icon: Settings,
  },
  {
    id: "login",
    title: "sidebar.login",
    url: "/login",
    icon: LogIn,
  },
];
