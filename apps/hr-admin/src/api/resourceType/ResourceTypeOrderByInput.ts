import { SortOrder } from "../../util/SortOrder";

export type ResourceTypeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
