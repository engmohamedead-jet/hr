import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EmployeeClassSalaryItemValueTitle } from "../employeeClassSalaryItemValue/EmployeeClassSalaryItemValueTitle";

export const EmployeeClassCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="employeeClassSalaryItemValues"
          reference="EmployeeClassSalaryItemValue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeClassSalaryItemValueTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="notes" />
      </SimpleForm>
    </Create>
  );
};