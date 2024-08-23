import { User } from "../user/User";
import { Employee } from "../employee/Employee";
import { Tenant } from "../tenant/Tenant";
import { Decimal } from "decimal.js";

export type DailyMovementRequest = {
  approvedByUserId?: User | null;
  createdAt: Date;
  employeeId?: Employee;
  id: string;
  isActive: boolean;
  isAppreoved: boolean;
  movementDate: Date;
  note: string | null;
  reason: string | null;
  tenantId?: Tenant | null;
  totalHours: Decimal | null;
  updatedAt: Date;
};
