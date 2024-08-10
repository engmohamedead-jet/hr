import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  address?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  credit?: SortOrder;
  currencyIdId?: SortOrder;
  debit?: SortOrder;
  description?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
  website?: SortOrder;
};
