import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { TENANT_TITLE_FIELD } from "./TenantTitle";
import { FISCALMONTH_TITLE_FIELD } from "../fiscalMonth/FiscalMonthTitle";
import { MACHINE_TITLE_FIELD } from "../machine/MachineTitle";
import { EMPLOYEEDEPARTMENT_TITLE_FIELD } from "../employeeDepartment/EmployeeDepartmentTitle";
import { EMPLOYEEGROUP_TITLE_FIELD } from "../employeeGroup/EmployeeGroupTitle";
import { EMPLOYEEROLE_TITLE_FIELD } from "../employeeRole/EmployeeRoleTitle";
import { JOBTITLE_TITLE_FIELD } from "../jobTitle/JobTitleTitle";
import { BONUSREQUEST_TITLE_FIELD } from "../bonusRequest/BonusRequestTitle";
import { LEAVEREQUESTTYPE_TITLE_FIELD } from "../leaveRequestType/LeaveRequestTypeTitle";
import { WORKCENTER_TITLE_FIELD } from "../workCenter/WorkCenterTitle";
import { WORKCENTERPRODUCTIVITYLOSSTYPE_TITLE_FIELD } from "../workCenterProductivityLossType/WorkCenterProductivityLossTypeTitle";
import { WORKCENTERTAG_TITLE_FIELD } from "../workCenterTag/WorkCenterTagTitle";
import { WORKORDER_TITLE_FIELD } from "../workOrder/WorkOrderTitle";
import { SCRAPREASON_TITLE_FIELD } from "../scrapReason/ScrapReasonTitle";

export const TenantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Attendance"
          target="tenantIdId"
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
          target="tenantIdId"
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
          target="tenantIdId"
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
          target="tenantIdId"
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
          target="tenantIdId"
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
          reference="EmployeeDepartment"
          target="tenantIdId"
          label="EmployeeDepartments"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
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
          reference="EmployeeGroup"
          target="tenantId"
          label="EmployeeGroups"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Descripption" source="descripption" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalziedName" source="normalziedName" />
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
          reference="EmployeeRole"
          target="tenantIdId"
          label="EmployeeRoles"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
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
          reference="Employee"
          target="tenantIdId"
          label="Employees"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="UsedBalance" source="usedBalance" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Machine"
          target="tenantIdId"
          label="Machines"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="IP" source="ip" />
            <BooleanField label="IsAndroid" source="isAndroid" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
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
          reference="FiscalMonth"
          target="tenantIdId"
          label="FiscalMonths"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BonusRequests"
              source="bonusrequest.id"
              reference="BonusRequest"
            >
              <TextField source={BONUSREQUEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="EndsOn" source="endsOn" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="StartsFrom" source="startsFrom" />
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
          reference="JobTitle"
          target="tenantIdId"
          label="JobTitles"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
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
          reference="LeaveRequestType"
          target="tenantIdId"
          label="LeaveRequestTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
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
          target="tenantIdId"
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
          target="tenantIdId"
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
        <ReferenceManyField
          reference="ScrapReason"
          target="tenantIdId"
          label="ScrapReasons"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
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
          reference="TradingSummary"
          target="tenantIdId"
          label="TradingSummaries"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="FiscalWeekId" source="fiscalWeekId" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <TextField label="PartyId" source="partyId" />
            <TextField label="Price" source="price" />
            <TextField label="PriceTotal" source="priceTotal" />
            <TextField label="ProductId" source="productId" />
            <TextField label="ProductVariantId" source="productVariantId" />
            <TextField label="Quantity" source="quantity" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TransactionDate" source="transactionDate" />
            <TextField label="TransactionTypeId" source="transactionTypeId" />
            <TextField label="UnitId" source="unitId" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenterAlternative"
          target="tenantIdId"
          label="WorkCenterAlternatives"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AlternativeWorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkCenterId1"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenterCapacity"
          target="tenantIdId"
          label="WorkCenterCapacities"
        >
          <Datagrid rowClick="show">
            <TextField label="Capacity" source="capacity" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <TextField label="StartTime" source="startTime" />
            <TextField label="StopTime" source="stopTime" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenterProductivity"
          target="tenantIdId"
          label="WorkCenterProductivities"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Duration" source="duration" />
            <TextField label="EndDate" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <TextField label="StartDate" source="startDate" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenterProductivityLossType"
          target="tenantIdId"
          label="WorkCenterProductivityLossTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
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
          reference="WorkCenterProductivityLoss"
          target="tenantIdId"
          label="WorkCenterProductivityLosses"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsManual" source="isManual" />
            <TextField label="EffectiveLossType" source="lossType" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="Sequence" source="sequence" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="WorkCenterProductivityLossTypeId"
              source="workcenterproductivitylosstype.id"
              reference="WorkCenterProductivityLossType"
            >
              <TextField source={WORKCENTERPRODUCTIVITYLOSSTYPE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenterRouting"
          target="tenantId"
          label="WorkCenterRoutings"
        >
          <Datagrid rowClick="show">
            <TextField label="BillOfMaterialId" source="billOfMaterialId" />
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="Sequence" source="sequence" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TimeCycleManual" source="timeCycleManual" />
            <TextField label="TimeModeBatch" source="timeModeBatch" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenterTag"
          target="tenantIdId"
          label="WorkCenterTags"
        >
          <Datagrid rowClick="show">
            <TextField label="Desciption" source="Desciption" />
            <TextField label="Code" source="code" />
            <TextField label="Color" source="color" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
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
          reference="WorkCenterWorkCenterTag"
          target="tenantIdId"
          label="WorkCenterWorkCenterTags"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkCenterId"
              source="workcenter.id"
              reference="WorkCenter"
            >
              <TextField source={WORKCENTER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="WorkCenterTagId"
              source="workcentertag.id"
              reference="WorkCenterTag"
            >
              <TextField source={WORKCENTERTAG_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkCenter"
          target="tenantIdId"
          label="WorkCenters"
        >
          <Datagrid rowClick="show">
            <TextField
              label="AnalyticDistribution"
              source="analyticDistribution"
            />
            <TextField label="Code" source="code" />
            <TextField label="Color" source="color" />
            <TextField label="CostPerHour" source="costPerHour" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="DefaultCapacity" source="defaultCapacity" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsProductive" source="isProductive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="OeeTareget" source="oeeTareget" />
            <TextField label="Sequence" source="sequence" />
            <TextField label="StartTime" source="startTime" />
            <TextField label="StopTime" source="stopTime" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TimeEfficiency" source="timeEfficiency" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkOrderDependency"
          target="tenantIdId"
          label="WorkOrderDependencies"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BlockedByWorkOrderId"
              source="workorder.id"
              reference="WorkOrder"
            >
              <TextField source={WORKORDER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkOrderId"
              source="workorder.id"
              reference="WorkOrder"
            >
              <TextField source={WORKORDER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkOrderRouting"
          target="tenantIdId"
          label="WorkOrderRoutings"
        >
          <Datagrid rowClick="show">
            <TextField label="ActualCost" source="actualCost" />
            <TextField label="ActualEndDate" source="actualEndDate" />
            <TextField
              label="ActualResourceHours"
              source="actualResourceHours"
            />
            <TextField label="ActualStartDate" source="actualStartDate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <TextField label="PlannedCost" source="plannedCost" />
            <TextField label="ScheduledEndDate" source="scheduledEndDate" />
            <TextField label="ScheduledStartDate" source="scheduledStartDate" />
            <TextField label="Sequence" source="sequence" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="WorkOrderId"
              source="workorder.id"
              reference="WorkOrder"
            >
              <TextField source={WORKORDER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WorkOrderStatus"
          target="tenantIdId"
          label="WorkOrderStatuses"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
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
          reference="WorkOrder"
          target="tenantIdId"
          label="WorkOrders"
        >
          <Datagrid rowClick="show">
            <TextField label="Barcode" source="barcode" />
            <TextField label="Code" source="code" />
            <TextField label="CostsPerHour" source="costsPerHour" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Duaration" source="duaration" />
            <TextField label="DuarationExpected" source="duarationExpected" />
            <TextField label="DuarationPercent" source="duarationPercent" />
            <TextField label="DuarationUnit" source="duarationUnit" />
            <TextField label="DueDate" source="dueDate" />
            <TextField label="EndDate" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="OrderQuantity" source="orderQuantity" />
            <TextField label="ProductionDate" source="productionDate" />
            <TextField label="QuantityProduced" source="quantityProduced" />
            <TextField
              label="QuantityReportedFromPreviouseWorkOrder"
              source="quantityReportedFromPreviouseWorkOrder"
            />
            <ReferenceField
              label="ScrapReasonId"
              source="scrapreason.id"
              reference="ScrapReason"
            >
              <TextField source={SCRAPREASON_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ScrappedQuantity" source="scrappedQuantity" />
            <TextField label="StartDate" source="startDate" />
            <TextField label="StockQuantity" source="stockQuantity" />
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
          reference="WorkSheetType"
          target="tenantId"
          label="WorkSheetTypes"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
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
      </SimpleShowLayout>
    </Show>
  );
};
