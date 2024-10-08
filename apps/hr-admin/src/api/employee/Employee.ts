import { Attendance } from "../attendance/Attendance";
import { Decimal } from "decimal.js";
import { BonusRequest } from "../bonusRequest/BonusRequest";
import { CheckInOut } from "../checkInOut/CheckInOut";
import { DailyMovementRequest } from "../dailyMovementRequest/DailyMovementRequest";
import { DayOffRequest } from "../dayOffRequest/DayOffRequest";
import { EmployeeDepartment } from "../employeeDepartment/EmployeeDepartment";
import { EmployeeGroup } from "../employeeGroup/EmployeeGroup";
import { EmployeeRole } from "../employeeRole/EmployeeRole";
import { JobTitle } from "../jobTitle/JobTitle";
import { LeaveRequest } from "../leaveRequest/LeaveRequest";
import { OverNightRequest } from "../overNightRequest/OverNightRequest";
import { Tenant } from "../tenant/Tenant";

export type Employee = {
  attendances?: Array<Attendance>;
  balance: Decimal | null;
  bonusRequests?: Array<BonusRequest>;
  checkInOuts?: Array<CheckInOut>;
  code: string | null;
  createdAt: Date;
  dailyMovementRequests?: Array<DailyMovementRequest>;
  dayOffRequests?: Array<DayOffRequest>;
  employeeDepartmentId?: EmployeeDepartment | null;
  employeeGroup?: EmployeeGroup | null;
  employeeRoleId?: EmployeeRole | null;
  hireDate: Date | null;
  id: string;
  isActive: boolean;
  jobTitle?: JobTitle | null;
  lastYearBalance: Decimal | null;
  leavingPermissionRequests?: Array<LeaveRequest>;
  name: string;
  note: string | null;
  overNightRequests?: Array<OverNightRequest>;
  remainingBalance: Decimal | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
  usedBalance: Decimal | null;
};
