import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  addressLine1?: SortOrder;
  allowSale?: SortOrder;
  cellPhoneNumber?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  fax?: SortOrder;
  homePhoneNumber?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  officeId?: SortOrder;
  storeTypeId?: SortOrder;
  street?: SortOrder;
  updatedAt?: SortOrder;
};
