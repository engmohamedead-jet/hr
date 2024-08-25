import { SortOrder } from "../../util/SortOrder";

export type WorkOrderDependencyOrderByInput = {
  blockedByWorkOrderIdId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  note?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
  workOrderIdId?: SortOrder;
};
