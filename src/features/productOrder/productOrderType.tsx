export type ProductOrderType = {
  id: number;
  orderNumber: string;
  clientName: string;
  product: string;
  paymentOption: "Online" | "Cash on Delivery";
  orderStatus:
    | "Pending"
    | "Processing"
    | "Shipped"
    | "Out for Delivery"
    | "Delivered"
    | "Cancelled"
    | "Returned";
  receipt: string | null;
};
