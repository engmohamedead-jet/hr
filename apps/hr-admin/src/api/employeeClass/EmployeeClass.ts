import { EmployeeClassSalaryItemValue } from "../employeeClassSalaryItemValue/EmployeeClassSalaryItemValue";

export type EmployeeClass = {
  code: string;
  createdAt: Date;
  description: string | null;
  employeeClassSalaryItemValues?: Array<EmployeeClassSalaryItemValue>;
  id: string;
  name: string;
  normalizedName: string;
  notes: string | null;
  updatedAt: Date;
};
