import { AttendanceCreateNestedManyWithoutTenantsInput } from "./AttendanceCreateNestedManyWithoutTenantsInput";
import { BonusRequestCreateNestedManyWithoutTenantsInput } from "./BonusRequestCreateNestedManyWithoutTenantsInput";
import { CheckInOutCreateNestedManyWithoutTenantsInput } from "./CheckInOutCreateNestedManyWithoutTenantsInput";
import { DailyMovementRequestCreateNestedManyWithoutTenantsInput } from "./DailyMovementRequestCreateNestedManyWithoutTenantsInput";
import { DayOffRequestCreateNestedManyWithoutTenantsInput } from "./DayOffRequestCreateNestedManyWithoutTenantsInput";
import { EmployeeDepartmentCreateNestedManyWithoutTenantsInput } from "./EmployeeDepartmentCreateNestedManyWithoutTenantsInput";
import { EmployeeGroupCreateNestedManyWithoutTenantsInput } from "./EmployeeGroupCreateNestedManyWithoutTenantsInput";
import { EmployeeRoleCreateNestedManyWithoutTenantsInput } from "./EmployeeRoleCreateNestedManyWithoutTenantsInput";
import { EmployeeCreateNestedManyWithoutTenantsInput } from "./EmployeeCreateNestedManyWithoutTenantsInput";
import { MachineCreateNestedManyWithoutTenantsInput } from "./MachineCreateNestedManyWithoutTenantsInput";
import { FiscalMonthCreateNestedManyWithoutTenantsInput } from "./FiscalMonthCreateNestedManyWithoutTenantsInput";
import { JobTitleCreateNestedManyWithoutTenantsInput } from "./JobTitleCreateNestedManyWithoutTenantsInput";
import { LeaveRequestTypeCreateNestedManyWithoutTenantsInput } from "./LeaveRequestTypeCreateNestedManyWithoutTenantsInput";
import { LeaveRequestCreateNestedManyWithoutTenantsInput } from "./LeaveRequestCreateNestedManyWithoutTenantsInput";
import { OverNightRequestCreateNestedManyWithoutTenantsInput } from "./OverNightRequestCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  attendances?: AttendanceCreateNestedManyWithoutTenantsInput;
  bonusRequests?: BonusRequestCreateNestedManyWithoutTenantsInput;
  checkInOuts?: CheckInOutCreateNestedManyWithoutTenantsInput;
  dailyMovements?: DailyMovementRequestCreateNestedManyWithoutTenantsInput;
  dayOffs?: DayOffRequestCreateNestedManyWithoutTenantsInput;
  employeeDepartments?: EmployeeDepartmentCreateNestedManyWithoutTenantsInput;
  employeeGroups?: EmployeeGroupCreateNestedManyWithoutTenantsInput;
  employeeRoles?: EmployeeRoleCreateNestedManyWithoutTenantsInput;
  employees?: EmployeeCreateNestedManyWithoutTenantsInput;
  fingerprintMachines?: MachineCreateNestedManyWithoutTenantsInput;
  fiscalMonths?: FiscalMonthCreateNestedManyWithoutTenantsInput;
  jobTitles?: JobTitleCreateNestedManyWithoutTenantsInput;
  leaveRequestTypes?: LeaveRequestTypeCreateNestedManyWithoutTenantsInput;
  leaveRequests?: LeaveRequestCreateNestedManyWithoutTenantsInput;
  overNights?: OverNightRequestCreateNestedManyWithoutTenantsInput;
};