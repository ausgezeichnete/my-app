export type ClientTypes = {
  id: number;
  name: string;
  phone: string;
  email: string;
  status: number;
  type: number;
  number_of_purchases: number;
  number_of_products: number;
  isCompletedDriverInformation: number;
  image: string;
  firebase: string | null;
  msgCode: number;
  token: string | null;
  driver_counts: {
    products_count: number;
    money_transactions_count: number;
    driver_products_orders_count: number;
    total_money: number;
  };
  driverInformation: null;
  country: {
    id: number;
    icon: string;
    status: number;
    countryCode: string;
    name: string;
    cities: unknown[];
  };
  addresses: unknown[];
  default_address: unknown | null;
};

export type ClientsPagination = {
  total: number;
  count: number;
  per_page: number;
  current_page: number;
  total_pages: number;
  is_pagination: boolean;
};

export type ClientsResponseData = {
  data: ClientTypes[];
  pagination: ClientsPagination;
};

export type TClientColumns = ClientTypes & {
  onClick?: () => void;
};
