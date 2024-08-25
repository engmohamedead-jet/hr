import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { BonusRequestTitle } from "../bonusRequest/BonusRequestTitle";
import { CheckInOutTitle } from "../checkInOut/CheckInOutTitle";
import { DailyMovementRequestTitle } from "../dailyMovementRequest/DailyMovementRequestTitle";
import { DayOffRequestTitle } from "../dayOffRequest/DayOffRequestTitle";
import { EmployeeDepartmentTitle } from "../employeeDepartment/EmployeeDepartmentTitle";
import { EmployeeGroupTitle } from "../employeeGroup/EmployeeGroupTitle";
import { EmployeeRoleTitle } from "../employeeRole/EmployeeRoleTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { MachineTitle } from "../machine/MachineTitle";
import { FiscalMonthTitle } from "../fiscalMonth/FiscalMonthTitle";
import { JobTitleTitle } from "../jobTitle/JobTitleTitle";
import { LeaveRequestTypeTitle } from "../leaveRequestType/LeaveRequestTypeTitle";
import { LeaveRequestTitle } from "../leaveRequest/LeaveRequestTitle";
import { OverNightRequestTitle } from "../overNightRequest/OverNightRequestTitle";
import { ScrapReasonTitle } from "../scrapReason/ScrapReasonTitle";
import { TradingSummaryTitle } from "../tradingSummary/TradingSummaryTitle";
import { WorkCenterAlternativeTitle } from "../workCenterAlternative/WorkCenterAlternativeTitle";
import { WorkCenterCapacityTitle } from "../workCenterCapacity/WorkCenterCapacityTitle";
import { WorkCenterProductivityTitle } from "../workCenterProductivity/WorkCenterProductivityTitle";
import { WorkCenterProductivityLossTypeTitle } from "../workCenterProductivityLossType/WorkCenterProductivityLossTypeTitle";
import { WorkCenterProductivityLossTitle } from "../workCenterProductivityLoss/WorkCenterProductivityLossTitle";
import { WorkCenterRoutingTitle } from "../workCenterRouting/WorkCenterRoutingTitle";
import { WorkCenterTagTitle } from "../workCenterTag/WorkCenterTagTitle";
import { WorkCenterWorkCenterTagTitle } from "../workCenterWorkCenterTag/WorkCenterWorkCenterTagTitle";
import { WorkCenterTitle } from "../workCenter/WorkCenterTitle";
import { WorkOrderDependencyTitle } from "../workOrderDependency/WorkOrderDependencyTitle";
import { WorkOrderRoutingTitle } from "../workOrderRouting/WorkOrderRoutingTitle";
import { WorkOrderStatusTitle } from "../workOrderStatus/WorkOrderStatusTitle";
import { WorkOrderTitle } from "../workOrder/WorkOrderTitle";
import { WorkSheetTypeTitle } from "../workSheetType/WorkSheetTypeTitle";

export const TenantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="bonusRequests"
          reference="BonusRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BonusRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="checkInOuts"
          reference="CheckInOut"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CheckInOutTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="dailyMovements"
          reference="DailyMovementRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DailyMovementRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="dayOffs"
          reference="DayOffRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DayOffRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeDepartments"
          reference="EmployeeDepartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeDepartmentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeGroups"
          reference="EmployeeGroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeGroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employeeRoles"
          reference="EmployeeRole"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeRoleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="employees"
          reference="Employee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fingerprintMachines"
          reference="Machine"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MachineTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fiscalMonths"
          reference="FiscalMonth"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FiscalMonthTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="jobTitles"
          reference="JobTitle"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={JobTitleTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="leaveRequestTypes"
          reference="LeaveRequestType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaveRequestTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="leaveRequests"
          reference="LeaveRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaveRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="overNights"
          reference="OverNightRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OverNightRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="scrapReasons"
          reference="ScrapReason"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScrapReasonTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tradingSummaries"
          reference="TradingSummary"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TradingSummaryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterAlternatives"
          reference="WorkCenterAlternative"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterAlternativeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterCapacities"
          reference="WorkCenterCapacity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterCapacityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterProductivities"
          reference="WorkCenterProductivity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterProductivityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterProductivityLossTypes"
          reference="WorkCenterProductivityLossType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterProductivityLossTypeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterProductivityLosses"
          reference="WorkCenterProductivityLoss"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterProductivityLossTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterRoutings"
          reference="WorkCenterRouting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterRoutingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterTags"
          reference="WorkCenterTag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterTagTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenterWorkCenterTags"
          reference="WorkCenterWorkCenterTag"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterWorkCenterTagTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workCenters"
          reference="WorkCenter"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkCenterTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workOrderDependencies"
          reference="WorkOrderDependency"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkOrderDependencyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workOrderRoutings"
          reference="WorkOrderRouting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkOrderRoutingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workOrderStatuses"
          reference="WorkOrderStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkOrderStatusTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workOrders"
          reference="WorkOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkOrderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="workSheetTypes"
          reference="WorkSheetType"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WorkSheetTypeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
