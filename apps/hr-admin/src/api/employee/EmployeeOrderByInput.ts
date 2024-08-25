import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  balance?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  employeeDepartmentIdId?: SortOrder;
  employeeGroupId?: SortOrder;
  employeeRoleIdId?: SortOrder;
  hireDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  jobTitleId?: SortOrder;
  lastYearBalance?: SortOrder;
  name?: SortOrder;
  note?: SortOrder;
  remainingBalance?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
  usedBalance?: SortOrder;
};
