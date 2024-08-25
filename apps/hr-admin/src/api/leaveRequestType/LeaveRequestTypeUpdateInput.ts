import { LeaveRequestUpdateManyWithoutLeaveRequestTypesInput } from "./LeaveRequestUpdateManyWithoutLeaveRequestTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type LeaveRequestTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  leavingPermissions?: LeaveRequestUpdateManyWithoutLeaveRequestTypesInput;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
