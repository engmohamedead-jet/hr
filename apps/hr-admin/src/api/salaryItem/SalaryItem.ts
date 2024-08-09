import { EmployeeClassSalaryItemValue } from "../employeeClassSalaryItemValue/EmployeeClassSalaryItemValue";
import { EmployeeSalaryDetail } from "../employeeSalaryDetail/EmployeeSalaryDetail";

export type SalaryItem = {
  code: string;
  createdAt: Date;
  description: string | null;
  employeeClassSalaryItemValues?: Array<EmployeeClassSalaryItemValue>;
  employeeSalaryDetails?: Array<EmployeeSalaryDetail>;
  id: string;
  name: string;
  normalizedName: string;
  note: string | null;
  updatedAt: Date;
};
