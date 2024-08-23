import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type OverNightRequestUpdateInput = {
  approvedByUserId?: UserWhereUniqueInput | null;
  employeeId?: EmployeeWhereUniqueInput;
  endDateTime?: Date;
  isActive?: boolean;
  isAppreoved?: boolean;
  note?: string | null;
  startDateTime?: Date;
  tenantId?: TenantWhereUniqueInput | null;
};
