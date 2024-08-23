import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type OverNightRequestWhereInput = {
  approvedByUserId?: UserWhereUniqueInput;
  employeeId?: EmployeeWhereUniqueInput;
  endDateTime?: DateTimeFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isAppreoved?: BooleanFilter;
  note?: StringNullableFilter;
  startDateTime?: DateTimeFilter;
  tenantId?: TenantWhereUniqueInput;
};
