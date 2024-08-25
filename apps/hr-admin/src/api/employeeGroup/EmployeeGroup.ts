import { Employee } from "../employee/Employee";
import { Tenant } from "../tenant/Tenant";

export type EmployeeGroup = {
  code: string | null;
  createdAt: Date;
  descripption: string | null;
  employees?: Array<Employee>;
  id: string;
  isActive: boolean | null;
  name: string;
  normalziedName: string;
  note: string | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
