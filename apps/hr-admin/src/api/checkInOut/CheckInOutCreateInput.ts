import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CheckInOutCreateInput = {
  approvedByUserId?: UserWhereUniqueInput | null;
  checkDate: Date;
  checkTime: Date;
  checkType: "In" | "Out";
  employee: EmployeeWhereUniqueInput;
  isActive: boolean;
  isAppreoved: boolean;
  machine: MachineWhereUniqueInput;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
