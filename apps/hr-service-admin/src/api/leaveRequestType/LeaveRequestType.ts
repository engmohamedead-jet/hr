import { LeaveRequest } from "../leaveRequest/LeaveRequest";
import { Tenant } from "../tenant/Tenant";

export type LeaveRequestType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean | null;
  leavingPermissions?: Array<LeaveRequest>;
  name: string | null;
  normalizedName: string | null;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
