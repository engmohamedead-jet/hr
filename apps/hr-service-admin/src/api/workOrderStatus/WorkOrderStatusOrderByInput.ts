import { SortOrder } from "../../util/SortOrder";

export type WorkOrderStatusOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
