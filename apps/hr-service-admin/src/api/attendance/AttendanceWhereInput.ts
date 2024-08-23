import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type AttendanceWhereInput = {
  ApprovedByUserId?: UserWhereUniqueInput;
  attendanceDate?: DateTimeFilter;
  checkInTime?: StringNullableFilter;
  checkOutTime?: StringNullableFilter;
  employeeId?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isAppreoved?: BooleanFilter;
  note?: StringNullableFilter;
  overtimeHours?: StringNullableFilter;
  reasonForAbsenteeism?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  wasAbsent?: StringNullableFilter;
  wasPresent?: StringFilter;
};
