import { User } from "../user/User";
import { Employee } from "../employee/Employee";
import { Tenant } from "../tenant/Tenant";

export type DayOffRequest = {
  approvedByUserId?: User | null;
  createdAt: Date;
  dayOffDate: Date;
  employeeId?: Employee;
  id: string;
  isActive: boolean;
  isAppreoved: boolean;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
