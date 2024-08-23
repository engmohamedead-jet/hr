import { EmployeeGroup as TEmployeeGroup } from "../api/employeeGroup/EmployeeGroup";

export const EMPLOYEEGROUP_TITLE_FIELD = "name";

export const EmployeeGroupTitle = (record: TEmployeeGroup): string => {
  return record.name?.toString() || String(record.id);
};
