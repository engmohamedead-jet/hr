import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateInput,
  DateTimeInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { MachineTitle } from "../machine/MachineTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const CheckInOutEdit = (props: EditProps): React.ReactElement => {
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
        <DateInput label="CheckDate" source="checkDate" />
        <DateTimeInput label="CheckTime" source="checkTime" />
        <SelectInput
          source="checkType"
          label="CheckType"
          choices={[
            { label: "In", value: "In" },
            { label: "Out", value: "Out" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="EmployeeId"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsAppreoved" source="isAppreoved" />
        <ReferenceInput
          source="machine.id"
          reference="Machine"
          label="MachineId"
        >
          <SelectInput optionText={MachineTitle} />
        </ReferenceInput>
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
