import { EmployeeSalary } from "../employeeSalary/EmployeeSalary";

export type FiscalMonth = {
  code: string;
  createdAt: Date;
  description: string | null;
  employeeSalaries?: Array<EmployeeSalary>;
  id: string;
  mormalizedName: string;
  name: string;
  note: string | null;
  updatedAt: Date;
};
