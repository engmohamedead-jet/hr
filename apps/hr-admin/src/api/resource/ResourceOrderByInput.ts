import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  resourceTypeIdId?: SortOrder;
  tenantIdId?: SortOrder;
  timeEfficiency?: SortOrder;
  updatedAt?: SortOrder;
};
