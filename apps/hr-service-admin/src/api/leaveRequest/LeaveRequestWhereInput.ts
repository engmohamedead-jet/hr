import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { LeaveRequestTypeWhereUniqueInput } from "../leaveRequestType/LeaveRequestTypeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type LeaveRequestWhereInput = {
  LeaveDate?: DateTimeFilter;
  approvedByUserId?: UserWhereUniqueInput;
  cause?: StringNullableFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isAppreoved?: BooleanFilter;
  leaveRequestTypeId?: LeaveRequestTypeWhereUniqueInput;
  note?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
};
