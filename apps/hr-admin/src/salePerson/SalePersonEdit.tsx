import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { SaleTeamTitle } from "../saleTeam/SaleTeamTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const SalePersonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="accountId.id"
          reference="Account"
          label="AccountId"
        >
          <SelectInput optionText={AccountTitle} />
        </ReferenceInput>
        <TextInput label="Address" source="address" />
        <TextInput label="Code" source="code" />
        <NumberInput label="CommissionRate" source="commissionRate" />
        <ReferenceInput
          source="employeeId.id"
          reference="Employee"
          label="EmployeeId"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <div />
        <ReferenceInput
          source="saleTeamId.id"
          reference="SaleTeam"
          label="SaleTeamId"
        >
          <SelectInput optionText={SaleTeamTitle} />
        </ReferenceInput>
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
