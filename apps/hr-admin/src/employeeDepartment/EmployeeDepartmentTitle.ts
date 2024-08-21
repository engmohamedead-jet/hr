import { EmployeeDepartment as TEmployeeDepartment } from "../api/employeeDepartment/EmployeeDepartment";

export const EMPLOYEEDEPARTMENT_TITLE_FIELD = "name";

export const EmployeeDepartmentTitle = (
  record: TEmployeeDepartment
): string => {
  return record.name?.toString() || String(record.id);
};
