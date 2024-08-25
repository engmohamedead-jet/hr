import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { LeaveRequestTypeWhereUniqueInput } from "../leaveRequestType/LeaveRequestTypeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type LeaveRequestUpdateInput = {
  LeaveDate?: Date;
  approvedByUserId?: UserWhereUniqueInput | null;
  cause?: string | null;
  employee?: EmployeeWhereUniqueInput;
  isActive?: boolean;
  isAppreoved?: boolean;
  leaveRequestTypeId?: LeaveRequestTypeWhereUniqueInput;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
