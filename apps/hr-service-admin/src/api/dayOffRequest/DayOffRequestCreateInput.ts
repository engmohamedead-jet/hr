import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type DayOffRequestCreateInput = {
  approvedByUserId?: UserWhereUniqueInput | null;
  dayOffDate: Date;
  employeeId: EmployeeWhereUniqueInput;
  isActive: boolean;
  isAppreoved: boolean;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
