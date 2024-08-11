import { SortOrder } from "../../util/SortOrder";

export type SaleTaxOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isExemption?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  rate?: SortOrder;
  storeId?: SortOrder;
  updatedAt?: SortOrder;
};
