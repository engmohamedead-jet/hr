import { EmployeeSalary as TEmployeeSalary } from "../api/employeeSalary/EmployeeSalary";

export const EMPLOYEESALARY_TITLE_FIELD = "id";

export const EmployeeSalaryTitle = (record: TEmployeeSalary): string => {
  return record.id?.toString() || String(record.id);
};
