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
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  storeTypIdId?: SortOrder;
  street?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
