import { SortOrder } from "../../util/SortOrder";

export type DailyMovementRequestOrderByInput = {
  approvedByUserIdId?: SortOrder;
  createdAt?: SortOrder;
  employeeIdId?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isAppreoved?: SortOrder;
  movementDate?: SortOrder;
  note?: SortOrder;
  reason?: SortOrder;
  tenantIdId?: SortOrder;
  totalHours?: SortOrder;
  updatedAt?: SortOrder;
};
