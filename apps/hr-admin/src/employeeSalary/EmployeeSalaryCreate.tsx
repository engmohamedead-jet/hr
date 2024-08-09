import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { FiscalMonthTitle } from "../fiscalMonth/FiscalMonthTitle";

export const EmployeeSalaryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="fiscalMonthId.id"
          reference="FiscalMonth"
          label="FiscalMonthId"
        >
          <SelectInput optionText={FiscalMonthTitle} />
        </ReferenceInput>
        <NumberInput label="NetSalary" source="netSalary" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput label="TotalDeserved" source="totalDeserved" />
        <NumberInput label="TotalDiscount" source="totalDiscount" />
      </SimpleForm>
    </Create>
  );
};
