import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type AttendanceUpdateInput = {
  ApprovedByUserId?: UserWhereUniqueInput | null;
  attendanceDate?: Date;
  checkInTime?: string | null;
  checkOutTime?: string | null;
  employeeId?: EmployeeWhereUniqueInput;
  isActive?: boolean;
  isAppreoved?: boolean;
  note?: string | null;
  overtimeHours?: string | null;
  reasonForAbsenteeism?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
  wasAbsent?: string | null;
  wasPresent?: string;
};
