export type ProductOrderType = {
  id: number;
  orderNumber: string;
  clientName: string;
  product: string;
  paymentOption: string;
  orderStatus: string;
  receipt: string | null;
};
