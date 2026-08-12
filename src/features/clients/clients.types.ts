export type ClientTypes = {
  id: number;
  name: string;
  phone: string;
  email: string;
  city: string;
  number_of_purchases: number;
  status: "Active" | "Inactive" | "Suspended";
  image: string;
};
