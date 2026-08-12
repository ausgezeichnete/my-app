export type ShipmentType = {
  id: number;
  shipmentNumber: string;
  clientName: string;
  address: string;
  deliveryMan: string;
  shippingDeliveryDate: string;
  shipmentStatus:
    | "Pending"
    | "In Transit"
    | "Out for Delivery"
    | "Delivered"
    | "Delayed"
    | "Cancelled";
  shipmentDetails: string;
};
