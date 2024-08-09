import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { SalaryItemTitle } from "../salaryItem/SalaryItemTitle";

export const EmployeeSalaryDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Notes" multiline source="notes" />
        <ReferenceInput
          source="salaryItemId.id"
          reference="SalaryItem"
          label="SalaryItemId"
        >
          <SelectInput optionText={SalaryItemTitle} />
        </ReferenceInput>
        <NumberInput label="SalaryItemValue" source="salaryItemValue" />
        <NumberInput step={1} label="Serial" source="serial" />
      </SimpleForm>
    </Create>
  );
};
