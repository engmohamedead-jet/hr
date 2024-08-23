import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EMPLOYEE_TITLE_FIELD } from "./EmployeeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { FISCALMONTH_TITLE_FIELD } from "../fiscalMonth/FiscalMonthTitle";
import { MACHINE_TITLE_FIELD } from "../machine/MachineTitle";
import { LEAVEREQUESTTYPE_TITLE_FIELD } from "../leaveRequestType/LeaveRequestTypeTitle";
import { EMPLOYEEDEPARTMENT_TITLE_FIELD } from "../employeeDepartment/EmployeeDepartmentTitle";
import { EMPLOYEEGROUP_TITLE_FIELD } from "../employeeGroup/EmployeeGroupTitle";
import { EMPLOYEEROLE_TITLE_FIELD } from "../employeeRole/EmployeeRoleTitle";
import { JOBTITLE_TITLE_FIELD } from "../jobTitle/JobTitleTitle";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Balance" source="balance" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="EmployeeDepartmentId"
          source="employeedepartment.id"
          reference="EmployeeDepartment"
        >
          <TextField source={EMPLOYEEDEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="EmployeeGroupId"
          source="employeegroup.id"
          reference="EmployeeGroup"
        >
          <TextField source={EMPLOYEEGROUP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="EmployeeRoleId"
          source="employeerole.id"
          reference="EmployeeRole"
        >
          <TextField source={EMPLOYEEROLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="HireDate" source="hireDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <ReferenceField
          label="JobTitleId"
          source="jobtitle.id"
          reference="JobTitle"
        >
          <TextField source={JOBTITLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="LastYearBalance" source="lastYearBalance" />
        <TextField label="Name" source="name" />
        <TextField label="Note" source="note" />
        <TextField label="RemainingBalance" source="remainingBalance" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UsedBalance" source="usedBalance" />
        <ReferenceManyField
          reference="Attendance"
          target="employeeIdId"
          label="Attendances"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="ApprovedByUserId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="AttendanceDate" source="attendanceDate" />
            <TextField label="CheckInTime" source="checkInTime" />
            <TextField label="CheckOutTime" source="checkOutTime" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EmployeeId"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsAppreoved" source="isAppreoved" />
            <TextField label="Note" source="note" />
            <TextField label="OvertimeHours" source="overtimeHours" />
            <TextField
              label="ReasonForAbsenteeism"
              source="reasonForAbsenteeism"
            />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="WasAbsent" source="wasAbsent" />
            <TextField label="WasPresent" source="wasPresent" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="BonusRequest"
          target="employeeId"
          label="BonusRequests"
        >
          <Datagrid rowClick="show">
            <TextField label="Absent" source="absent" />
            <TextField label="Actual" source="actual" />
            <TextField label="AllStoresValue" source="allStoreValue" />
            <TextField label="AnnualLeave" source="annualLeave" />
            <ReferenceField
              label="ApprovedByUserId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="AssistantManager" source="assistantManager" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EmployeeId"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="FinalAmount" source="finalAmount" />
            <ReferenceField
              label="FiscalMonthId"
              source="fiscalmonth.id"
              reference="FiscalMonth"
            >
              <TextField source={FISCALMONTH_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsAppreoved" source="isAppreoved" />
            <TextField label="Note" source="note" />
            <TextField label="Penalty" source="penalty" />
            <TextField label="Percentage2" source="percentage2" />
            <TextField label="Present" source="present" />
            <TextField label="ProratedValue" source="proratedValue" />
            <TextField label="Sales" source="sales" />
            <TextField label="SalesStaff" source="salesStaff" />
            <TextField
              label="SalesTargetPercentage"
              source="salesTargetPercentage"
            />
            <TextField label="ShopManager" source="shopManager" />
            <TextField label="SickLeave" source="sickLeave" />
            <TextField label="Target" source="target" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Warning" source="warning" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CheckInOut"
          target="employeeId"
          label="CheckInOuts"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="ApprovedByUserId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="CheckDate" source="checkDate" />
            <TextField label="CheckTime" source="checkTime" />
            <TextField label="CheckType" source="checkType" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EmployeeId"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsAppreoved" source="isAppreoved" />
            <ReferenceField
              label="MachineId"
              source="machine.id"
              reference="Machine"
            >
              <TextField source={MACHINE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Note" source="note" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DailyMovementRequest"
          target="employeeIdId"
          label="DailyMovementRequests"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="ApprovedByUserId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EmployeeId"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsAppreoved" source="isAppreoved" />
            <TextField label="MovementDate" source="movementDate" />
            <TextField label="Note" source="note" />
            <TextField label="Reason" source="reason" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TotalHours" source="totalHours" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DayOffRequest"
          target="employeeIdId"
          label="DayOffRequests"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="ApprovedByUserId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="DayOffDate" source="dayOffDate" />
            <ReferenceField
              label="EmployeeId"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsAppreoved" source="isAppreoved" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LeaveRequest"
          target="employeeId"
          label="LeaveRequests"
        >
          <Datagrid rowClick="show">
            <TextField label="LeaveDate" source="LeaveDate" />
            <ReferenceField
              label="ApprovedByUserId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Cause" source="cause" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsAppreoved" source="isAppreoved" />
            <ReferenceField
              label="LeaveRequestTypeId"
              source="leaverequesttype.id"
              reference="LeaveRequestType"
            >
              <TextField source={LEAVEREQUESTTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Note" source="note" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="OverNightRequest"
          target="employeeIdId"
          label="OverNightRequests"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="ApprovedByUserId"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="EmployeeId"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="EndDateTime" source="endDateTime" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsAppreoved" source="isAppreoved" />
            <TextField label="Note" source="note" />
            <TextField label="StartDateTime" source="startDateTime" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
