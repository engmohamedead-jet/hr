import { EmployeeSalaryDetail as TEmployeeSalaryDetail } from "../api/employeeSalaryDetail/EmployeeSalaryDetail";

export const EMPLOYEESALARYDETAIL_TITLE_FIELD = "id";

export const EmployeeSalaryDetailTitle = (
  record: TEmployeeSalaryDetail
): string => {
  return record.id?.toString() || String(record.id);
};
