import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const DailyMovementRequestEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="approvedByUserId.id"
          reference="User"
          label="ApprovedByUserId"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="employeeId.id"
          reference="Employee"
          label="EmployeeId"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsAppreoved" source="isAppreoved" />
        <DateTimeInput label="MovementDate" source="movementDate" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="Reason" multiline source="reason" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
        <NumberInput label="TotalHours" source="totalHours" />
      </SimpleForm>
    </Edit>
  );
};
