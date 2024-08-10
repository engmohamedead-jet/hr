import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EmployeeSalaryTitle } from "../employeeSalary/EmployeeSalaryTitle";
import { FiscalWeekTitle } from "../fiscalWeek/FiscalWeekTitle";
import { FiscalYearTitle } from "../fiscalYear/FiscalYearTitle";

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
        <DateTimeInput label="EndsOn" source="endsOn" />
        <ReferenceArrayInput
          source="fiscalWeeks"
          reference="FiscalWeek"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FiscalWeekTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="fiscalYear.id"
          reference="FiscalYear"
          label="FiscalYear"
        >
          <SelectInput optionText={FiscalYearTitle} />
        </ReferenceInput>
        <TextInput label="NormalizedName" source="mormalizedName" />
        <TextInput label="Name" source="name" />
        <TextInput label="Note" multiline source="note" />
        <DateTimeInput label="StartsFrom" source="startsFrom" />
      </SimpleForm>
    </Edit>
  );
};
