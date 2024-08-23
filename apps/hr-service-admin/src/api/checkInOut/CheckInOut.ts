import { User } from "../user/User";
import { Employee } from "../employee/Employee";
import { Machine } from "../machine/Machine";
import { Tenant } from "../tenant/Tenant";

export type CheckInOut = {
  approvedByUserId?: User | null;
  checkDate: Date;
  checkTime: Date;
  checkType?: "In" | "Out";
  createdAt: Date;
  employee?: Employee;
  id: string;
  isActive: boolean;
  isAppreoved: boolean;
  machine?: Machine;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
