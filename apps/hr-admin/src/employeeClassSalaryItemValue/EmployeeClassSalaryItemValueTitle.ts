import { EmployeeClassSalaryItemValue as TEmployeeClassSalaryItemValue } from "../api/employeeClassSalaryItemValue/EmployeeClassSalaryItemValue";

export const EMPLOYEECLASSSALARYITEMVALUE_TITLE_FIELD = "id";

export const EmployeeClassSalaryItemValueTitle = (
  record: TEmployeeClassSalaryItemValue
): string => {
  return record.id?.toString() || String(record.id);
};
