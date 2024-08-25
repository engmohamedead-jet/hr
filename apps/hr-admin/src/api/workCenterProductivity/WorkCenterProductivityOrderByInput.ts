import { SortOrder } from "../../util/SortOrder";

export type WorkCenterProductivityOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  duration?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  note?: SortOrder;
  startDate?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
  workCenterIdId?: SortOrder;
};
