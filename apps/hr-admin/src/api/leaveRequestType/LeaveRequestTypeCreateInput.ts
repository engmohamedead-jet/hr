import { LeaveRequestCreateNestedManyWithoutLeaveRequestTypesInput } from "./LeaveRequestCreateNestedManyWithoutLeaveRequestTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type LeaveRequestTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean | null;
  leavingPermissions?: LeaveRequestCreateNestedManyWithoutLeaveRequestTypesInput;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
