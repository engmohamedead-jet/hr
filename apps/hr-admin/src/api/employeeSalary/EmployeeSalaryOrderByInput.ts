import { SortOrder } from "../../util/SortOrder";

export type EmployeeSalaryOrderByInput = {
  createdAt?: SortOrder;
  fiscalMonthIdId?: SortOrder;
  id?: SortOrder;
  netSalary?: SortOrder;
  note?: SortOrder;
  totalDeserved?: SortOrder;
  totalDiscount?: SortOrder;
  updatedAt?: SortOrder;
};
