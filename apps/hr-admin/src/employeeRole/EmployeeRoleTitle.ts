import { EmployeeRole as TEmployeeRole } from "../api/employeeRole/EmployeeRole";

export const EMPLOYEEROLE_TITLE_FIELD = "name";

export const EmployeeRoleTitle = (record: TEmployeeRole): string => {
  return record.name?.toString() || String(record.id);
};
