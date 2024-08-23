import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type DailyMovementRequestWhereInput = {
  approvedByUserId?: UserWhereUniqueInput;
  employeeId?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isAppreoved?: BooleanFilter;
  movementDate?: DateTimeFilter;
  note?: StringNullableFilter;
  reason?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  totalHours?: DecimalNullableFilter;
};
