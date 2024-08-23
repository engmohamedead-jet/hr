import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { Decimal } from "decimal.js";

export type DailyMovementRequestUpdateInput = {
  approvedByUserId?: UserWhereUniqueInput | null;
  employeeId?: EmployeeWhereUniqueInput;
  isActive?: boolean;
  isAppreoved?: boolean;
  movementDate?: Date;
  note?: string | null;
  reason?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
  totalHours?: Decimal | null;
};
