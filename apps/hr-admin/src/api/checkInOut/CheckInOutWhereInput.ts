import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { MachineWhereUniqueInput } from "../machine/MachineWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type CheckInOutWhereInput = {
  approvedByUserId?: UserWhereUniqueInput;
  checkDate?: DateTimeFilter;
  checkTime?: DateTimeFilter;
  checkType?: "In" | "Out";
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isAppreoved?: BooleanFilter;
  machine?: MachineWhereUniqueInput;
  note?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
};
