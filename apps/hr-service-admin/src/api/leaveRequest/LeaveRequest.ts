import { User } from "../user/User";
import { Employee } from "../employee/Employee";
import { LeaveRequestType } from "../leaveRequestType/LeaveRequestType";
import { Tenant } from "../tenant/Tenant";

export type LeaveRequest = {
  LeaveDate: Date;
  approvedByUserId?: User | null;
  cause: string | null;
  createdAt: Date;
  employee?: Employee;
  id: string;
  isActive: boolean;
  isAppreoved: boolean;
  leaveRequestTypeId?: LeaveRequestType;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
