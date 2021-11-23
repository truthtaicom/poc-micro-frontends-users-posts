export interface IUserAddressGeo {
  lat: string,
  lng:  string
}

export interface IUserAddress {
  street: string,
  suite:  string,
  city: string,
  zipcode: string,
  geo: IUserAddressGeo
}

export interface IUserCompany {
  name: string,
  catchPhrase:  string,
  bs: string,
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  phone: string,
  website: string,
  company: IUserCompany
}
