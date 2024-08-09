import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { EmployeeClassTitle } from "../employeeClass/EmployeeClassTitle";
import { SalaryItemTitle } from "../salaryItem/SalaryItemTitle";

export const EmployeeClassSalaryItemValueEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
