import { SortOrder } from "../../util/SortOrder";

export type CostCenterOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isSystem?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};
