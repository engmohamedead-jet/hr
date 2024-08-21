import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  balance?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  employeeClassIdId?: SortOrder;
  employeeDepartmentIdId?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  lastYearBalance?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  remainingBalance?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
  usedBalance?: SortOrder;
};
