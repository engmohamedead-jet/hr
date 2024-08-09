import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { EmployeeClassTitle } from "../employeeClass/EmployeeClassTitle";
import { SalaryItemTitle } from "../salaryItem/SalaryItemTitle";

export const EmployeeClassSalaryItemValueCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employeeClassId.id"
          reference="EmployeeClass"
          label="EmployeeClassId"
        >
          <SelectInput optionText={EmployeeClassTitle} />
        </ReferenceInput>
        <NumberInput label="ItemValue" source="itemValue" />
        <ReferenceInput
          source="salaryItemId.id"
          reference="SalaryItem"
          label="SalaryItemId"
        >
          <SelectInput optionText={SalaryItemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
