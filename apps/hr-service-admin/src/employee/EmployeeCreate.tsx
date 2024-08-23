import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { AttendanceTitle } from "../attendance/AttendanceTitle";
import { BonusRequestTitle } from "../bonusRequest/BonusRequestTitle";
import { CheckInOutTitle } from "../checkInOut/CheckInOutTitle";
import { DailyMovementRequestTitle } from "../dailyMovementRequest/DailyMovementRequestTitle";
import { DayOffRequestTitle } from "../dayOffRequest/DayOffRequestTitle";
import { EmployeeDepartmentTitle } from "../employeeDepartment/EmployeeDepartmentTitle";
import { EmployeeGroupTitle } from "../employeeGroup/EmployeeGroupTitle";
import { EmployeeRoleTitle } from "../employeeRole/EmployeeRoleTitle";
import { JobTitleTitle } from "../jobTitle/JobTitleTitle";
import { LeaveRequestTitle } from "../leaveRequest/LeaveRequestTitle";
import { OverNightRequestTitle } from "../overNightRequest/OverNightRequestTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="attendances"
          reference="Attendance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AttendanceTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Balance" source="balance" />
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
        <TextInput label="Code" source="code" />
        <ReferenceArrayInput
          source="dailyMovementRequests"
          reference="DailyMovementRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DailyMovementRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="dayOffRequests"
          reference="DayOffRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DayOffRequestTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="employeeDepartmentId.id"
          reference="EmployeeDepartment"
          label="EmployeeDepartmentId"
        >
          <SelectInput optionText={EmployeeDepartmentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employeeGroup.id"
          reference="EmployeeGroup"
          label="EmployeeGroupId"
        >
          <SelectInput optionText={EmployeeGroupTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employeeRoleId.id"
          reference="EmployeeRole"
          label="EmployeeRoleId"
        >
          <SelectInput optionText={EmployeeRoleTitle} />
        </ReferenceInput>
        <DateTimeInput label="HireDate" source="hireDate" />
        <BooleanInput label="IsActive" source="isActive" />
        <ReferenceInput
          source="jobTitle.id"
          reference="JobTitle"
          label="JobTitleId"
        >
          <SelectInput optionText={JobTitleTitle} />
        </ReferenceInput>
        <NumberInput label="LastYearBalance" source="lastYearBalance" />
        <ReferenceArrayInput
          source="leavingPermissionRequests"
          reference="LeaveRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaveRequestTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceArrayInput
          source="overNightRequests"
          reference="OverNightRequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OverNightRequestTitle} />
        </ReferenceArrayInput>
        <NumberInput label="RemainingBalance" source="remainingBalance" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <NumberInput label="UsedBalance" source="usedBalance" />
      </SimpleForm>
    </Create>
  );
};
