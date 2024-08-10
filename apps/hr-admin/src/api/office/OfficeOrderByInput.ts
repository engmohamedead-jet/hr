import { SortOrder } from "../../util/SortOrder";

export type OfficeOrderByInput = {
  address?: SortOrder;
  cellPhoneNumber?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  fax?: SortOrder;
  homePhoneNumber?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};
