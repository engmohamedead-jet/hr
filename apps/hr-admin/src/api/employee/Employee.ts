import { Decimal } from "decimal.js";
import { EmployeeClass } from "../employeeClass/EmployeeClass";
import { EmployeeDepartment } from "../employeeDepartment/EmployeeDepartment";
import { SalePerson } from "../salePerson/SalePerson";
import { Tenant } from "../tenant/Tenant";

export type Employee = {
  balance: Decimal | null;
  code: string | null;
  createdAt: Date;
  employeeClassId?: EmployeeClass | null;
  employeeDepartmentId?: EmployeeDepartment | null;
  id: string;
  isActive: boolean;
  lastYearBalance: Decimal | null;
  name: string;
  normalizedName: string;
  note: string | null;
  remainingBalance: Decimal | null;
  salePeople?: Array<SalePerson>;
  tenantId?: Tenant | null;
  updatedAt: Date;
  usedBalance: Decimal | null;
};
