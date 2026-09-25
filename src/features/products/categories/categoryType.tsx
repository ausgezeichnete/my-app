export type CategoryName =
  | "Electronics"
  | "Gadgets"
  | "Accessories"
  | "Laptops"
  | "Smartphones"
  | "Audio"
  | "Gaming"
  | "Cameras"
  | "Wearables"
  | "Home Appliances";

export type CategoryType = {
  id: string | number;
  image: string;
  name: CategoryName;
};
