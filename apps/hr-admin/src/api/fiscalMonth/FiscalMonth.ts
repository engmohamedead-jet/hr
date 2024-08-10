import { EmployeeSalary } from "../employeeSalary/EmployeeSalary";
import { FiscalWeek } from "../fiscalWeek/FiscalWeek";
import { FiscalYear } from "../fiscalYear/FiscalYear";

export type FiscalMonth = {
  code: string;
  createdAt: Date;
  description: string | null;
  employeeSalaries?: Array<EmployeeSalary>;
  endsOn: Date | null;
  fiscalWeeks?: Array<FiscalWeek>;
  fiscalYear?: FiscalYear;
  id: string;
  mormalizedName: string;
  name: string;
  note: string | null;
  startsFrom: Date | null;
  updatedAt: Date;
};
