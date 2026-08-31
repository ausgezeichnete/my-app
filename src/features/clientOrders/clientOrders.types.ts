export type OrderStatus =
  | "pending"
  | "inTransit"
  | "delivered"
  | "delayed"
  | "cancelled";

export type PaymentMethod = "Credit Card" | "Debit Card" | "PayPal";

export type ClientOrderType = {
  id: number;
  orderNumber: string;
  product: string;
  paymentMethod: PaymentMethod;
  orderStatus: OrderStatus;
  receipt: string;
};
