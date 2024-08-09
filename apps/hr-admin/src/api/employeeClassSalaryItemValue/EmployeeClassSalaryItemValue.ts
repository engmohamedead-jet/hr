import { EmployeeClass } from "../employeeClass/EmployeeClass";
import { Decimal } from "decimal.js";
import { SalaryItem } from "../salaryItem/SalaryItem";

export type EmployeeClassSalaryItemValue = {
  createdAt: Date;
  employeeClassId?: EmployeeClass;
  id: string;
  itemValue: Decimal;
  salaryItemId?: SalaryItem;
  updatedAt: Date;
};
