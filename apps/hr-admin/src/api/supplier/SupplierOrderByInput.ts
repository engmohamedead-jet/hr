import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  address?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  credit?: SortOrder;
  currencyId?: SortOrder;
  customerIdId?: SortOrder;
  debit?: SortOrder;
  description?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  phoneNumber?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
  website?: SortOrder;
};
