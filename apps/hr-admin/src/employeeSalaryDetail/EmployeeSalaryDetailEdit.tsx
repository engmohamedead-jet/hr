import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { SalaryItemTitle } from "../salaryItem/SalaryItemTitle";

export const EmployeeSalaryDetailEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
