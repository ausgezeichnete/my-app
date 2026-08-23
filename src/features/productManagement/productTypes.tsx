export type ProductType = {
  id: string | number;
  name: string;
  image: string;
  category: "Electronics" | "Gadgets" | "Accessories" | string;
  orderDeadline: string;
  quantity: number;
  price: number;
  currency: string;
};
