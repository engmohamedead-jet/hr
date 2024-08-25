import { SortOrder } from "../../util/SortOrder";

export type LeaveRequestOrderByInput = {
  LeaveDate?: SortOrder;
  approvedByUserIdId?: SortOrder;
  cause?: SortOrder;
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isAppreoved?: SortOrder;
  leaveRequestTypeIdId?: SortOrder;
  note?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
