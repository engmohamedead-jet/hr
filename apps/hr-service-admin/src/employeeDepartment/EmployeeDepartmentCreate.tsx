import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const EmployeeDepartmentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="employees"
          reference="Employee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};