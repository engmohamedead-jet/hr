import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const AttendanceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="ApprovedByUserId.id"
          reference="User"
          label="ApprovedByUserId"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="AttendanceDate" source="attendanceDate" />
        <TextInput label="CheckInTime" source="checkInTime" />
        <TextInput label="CheckOutTime" source="checkOutTime" />
        <ReferenceInput
          source="employeeId.id"
          reference="Employee"
          label="EmployeeId"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsAppreoved" source="isAppreoved" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="OvertimeHours" source="overtimeHours" />
        <TextInput label="ReasonForAbsenteeism" source="reasonForAbsenteeism" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <TextInput label="WasAbsent" source="wasAbsent" />
        <TextInput label="WasPresent" source="wasPresent" />
      </SimpleForm>
    </Create>
  );
};
