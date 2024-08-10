import { SortOrder } from "../../util/SortOrder";

export type SalePriceTypeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  customersId?: SortOrder;
  id?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};
