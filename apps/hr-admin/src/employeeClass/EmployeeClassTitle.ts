import { EmployeeClass as TEmployeeClass } from "../api/employeeClass/EmployeeClass";

export const EMPLOYEECLASS_TITLE_FIELD = "name";

export const EmployeeClassTitle = (record: TEmployeeClass): string => {
  return record.name?.toString() || String(record.id);
};
