export interface Sender {
  name: string;
  avatarUrl: string;
}

export interface LocationInfo {
  label: string;
  city: string;
  address: string;
  time: string;
  date: string;
  phone: string;
}

export interface Dimensions {
  weight: string;
  length: string;
  width: string;
}

export interface ShipmentDetailsCardProps {
  id: number;
  sender: Sender;
  pickup: LocationInfo;
  dropoff: LocationInfo;
  shipmentType: string;
  shipmentDescription: string;
  dimensions: Dimensions;
  photos: string[];
  vehicleType: string;
  price: number;
  currencySymbol?: string;
  onShowMap?: (location: LocationInfo) => void; //loca
  onCall?: () => void;
}
