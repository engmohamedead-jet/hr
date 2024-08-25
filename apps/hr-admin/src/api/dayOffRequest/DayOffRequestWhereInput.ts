import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type DayOffRequestWhereInput = {
  approvedByUserId?: UserWhereUniqueInput;
  dayOffDate?: DateTimeFilter;
  employeeId?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isAppreoved?: BooleanFilter;
  note?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
};
