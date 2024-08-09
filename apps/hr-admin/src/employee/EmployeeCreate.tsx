import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { DepartmentTitle } from "../department/DepartmentTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Balance" source="balance" />
        <ReferenceInput
          source="departmentId.id"
          reference="Department"
          label="Department"
        >
          <SelectInput optionText={DepartmentTitle} />
        </ReferenceInput>
        <NumberInput label="LastYearBalance" source="lastYearBalance" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput label="RemainingBalance" source="remainingBalance" />
        <NumberInput label="UsedBalance" source="usedBalance" />
      </SimpleForm>
    </Create>
  );
};
