import { Employee } from "../employee/Employee";
import { Tenant } from "../tenant/Tenant";

export type EmployeeRole = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  employees?: Array<Employee>;
  id: string;
  isActive: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
