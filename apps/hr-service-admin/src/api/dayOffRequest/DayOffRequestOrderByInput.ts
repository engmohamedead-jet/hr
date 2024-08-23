import { SortOrder } from "../../util/SortOrder";

export type DayOffRequestOrderByInput = {
  approvedByUserIdId?: SortOrder;
  createdAt?: SortOrder;
  dayOffDate?: SortOrder;
  employeeIdId?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isAppreoved?: SortOrder;
  note?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
