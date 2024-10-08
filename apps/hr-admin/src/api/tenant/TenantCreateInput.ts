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
import { ScrapReasonCreateNestedManyWithoutTenantsInput } from "./ScrapReasonCreateNestedManyWithoutTenantsInput";
import { TradingSummaryCreateNestedManyWithoutTenantsInput } from "./TradingSummaryCreateNestedManyWithoutTenantsInput";
import { WorkCenterAlternativeCreateNestedManyWithoutTenantsInput } from "./WorkCenterAlternativeCreateNestedManyWithoutTenantsInput";
import { WorkCenterCapacityCreateNestedManyWithoutTenantsInput } from "./WorkCenterCapacityCreateNestedManyWithoutTenantsInput";
import { WorkCenterProductivityCreateNestedManyWithoutTenantsInput } from "./WorkCenterProductivityCreateNestedManyWithoutTenantsInput";
import { WorkCenterProductivityLossTypeCreateNestedManyWithoutTenantsInput } from "./WorkCenterProductivityLossTypeCreateNestedManyWithoutTenantsInput";
import { WorkCenterProductivityLossCreateNestedManyWithoutTenantsInput } from "./WorkCenterProductivityLossCreateNestedManyWithoutTenantsInput";
import { WorkCenterRoutingCreateNestedManyWithoutTenantsInput } from "./WorkCenterRoutingCreateNestedManyWithoutTenantsInput";
import { WorkCenterTagCreateNestedManyWithoutTenantsInput } from "./WorkCenterTagCreateNestedManyWithoutTenantsInput";
import { WorkCenterWorkCenterTagCreateNestedManyWithoutTenantsInput } from "./WorkCenterWorkCenterTagCreateNestedManyWithoutTenantsInput";
import { WorkCenterCreateNestedManyWithoutTenantsInput } from "./WorkCenterCreateNestedManyWithoutTenantsInput";
import { WorkOrderDependencyCreateNestedManyWithoutTenantsInput } from "./WorkOrderDependencyCreateNestedManyWithoutTenantsInput";
import { WorkOrderRoutingCreateNestedManyWithoutTenantsInput } from "./WorkOrderRoutingCreateNestedManyWithoutTenantsInput";
import { WorkOrderStatusCreateNestedManyWithoutTenantsInput } from "./WorkOrderStatusCreateNestedManyWithoutTenantsInput";
import { WorkOrderCreateNestedManyWithoutTenantsInput } from "./WorkOrderCreateNestedManyWithoutTenantsInput";
import { WorkSheetTypeCreateNestedManyWithoutTenantsInput } from "./WorkSheetTypeCreateNestedManyWithoutTenantsInput";

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
  scrapReasons?: ScrapReasonCreateNestedManyWithoutTenantsInput;
  tradingSummaries?: TradingSummaryCreateNestedManyWithoutTenantsInput;
  workCenterAlternatives?: WorkCenterAlternativeCreateNestedManyWithoutTenantsInput;
  workCenterCapacities?: WorkCenterCapacityCreateNestedManyWithoutTenantsInput;
  workCenterProductivities?: WorkCenterProductivityCreateNestedManyWithoutTenantsInput;
  workCenterProductivityLossTypes?: WorkCenterProductivityLossTypeCreateNestedManyWithoutTenantsInput;
  workCenterProductivityLosses?: WorkCenterProductivityLossCreateNestedManyWithoutTenantsInput;
  workCenterRoutings?: WorkCenterRoutingCreateNestedManyWithoutTenantsInput;
  workCenterTags?: WorkCenterTagCreateNestedManyWithoutTenantsInput;
  workCenterWorkCenterTags?: WorkCenterWorkCenterTagCreateNestedManyWithoutTenantsInput;
  workCenters?: WorkCenterCreateNestedManyWithoutTenantsInput;
  workOrderDependencies?: WorkOrderDependencyCreateNestedManyWithoutTenantsInput;
  workOrderRoutings?: WorkOrderRoutingCreateNestedManyWithoutTenantsInput;
  workOrderStatuses?: WorkOrderStatusCreateNestedManyWithoutTenantsInput;
  workOrders?: WorkOrderCreateNestedManyWithoutTenantsInput;
  workSheetTypes?: WorkSheetTypeCreateNestedManyWithoutTenantsInput;
};
