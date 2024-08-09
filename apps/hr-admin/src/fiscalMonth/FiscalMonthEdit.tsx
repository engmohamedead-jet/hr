import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EmployeeSalaryTitle } from "../employeeSalary/EmployeeSalaryTitle";

export const FiscalMonthEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="employeeSalaries"
          reference="EmployeeSalary"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeSalaryTitle} />
        </ReferenceArrayInput>
        <TextInput label="NormalizedName" source="mormalizedName" />
        <TextInput label="Name" source="name" />
        <TextInput label="Note" multiline source="note" />
      </SimpleForm>
    </Edit>
  );
};
