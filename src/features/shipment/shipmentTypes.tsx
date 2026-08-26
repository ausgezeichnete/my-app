export type ShipmentType = {
  id: number;
  shipmentNumber: string;
  clientName: string;
  address: string;
  deliveryMan: string;
  shippingDeliveryDate: string;
  shipmentStatus:
    | "pending"
    | "inTransit"
    | "outForDelivery"
    | "delivered"
    | "delayed"
    | "cancelled";
  shipmentDetails: string;
};
