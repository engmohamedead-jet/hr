import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
} from "react-admin";

import { FiscalMonthTitle } from "../fiscalMonth/FiscalMonthTitle";

export const FiscalYearCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <DateTimeInput label="EndsOn" source="endsOn" />
        <ReferenceArrayInput
          source="fiscalMonths"
          reference="FiscalMonth"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FiscalMonthTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="IsEodRequired" source="isEodRequired" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" source="notes" />
        <DateTimeInput label="StartsFrom" source="startsFrom" />
      </SimpleForm>
    </Create>
  );
};