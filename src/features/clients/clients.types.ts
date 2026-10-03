export type ClientTypes = {
  id: number;
  name: string;
  phone: string;
  email: string;
  status: number;
  type: number;
  number_of_purchases: number;
  isCompletedDriverInformation: number;
  image: string;
  firebase: string;
  msgCode: number;
  token: string | null;
  driverInformation: {
    id: number;
    carModel: number;
    carType: number;
    carLicenceFront: string;
    carLicenceBack: string;
    driverLicenceFront: string;
    driverLicenceBack: string;
    bloodTest: string;
    psychologicalHealth: string;
    currentOrder: null; // not clear from example
    my_wallet: number;
  };
  country: {
    id: number;
    name: string;
    icon: string;
    status: number;
    countryCode: string;
    name_ar: string;
    name_en: string;
  };
};

export type TClientColumns = ClientTypes & {
  onClick?: () => void;
};
