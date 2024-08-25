import { SortOrder } from "../../util/SortOrder";

export type WorkOrderRoutingOrderByInput = {
  actualCost?: SortOrder;
  actualEndDate?: SortOrder;
  actualResourceHours?: SortOrder;
  actualStartDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  note?: SortOrder;
  plannedCost?: SortOrder;
  scheduledEndDate?: SortOrder;
  scheduledStartDate?: SortOrder;
  sequence?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
  workOrderIdId?: SortOrder;
};
