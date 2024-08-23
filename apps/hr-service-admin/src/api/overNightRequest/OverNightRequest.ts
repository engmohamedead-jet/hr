import { User } from "../user/User";
import { Employee } from "../employee/Employee";
import { Tenant } from "../tenant/Tenant";

export type OverNightRequest = {
  approvedByUserId?: User | null;
  createdAt: Date;
  employeeId?: Employee;
  endDateTime: Date;
  id: string;
  isActive: boolean;
  isAppreoved: boolean;
  note: string | null;
  startDateTime: Date;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
