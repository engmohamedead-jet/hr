import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { FISCALMONTH_TITLE_FIELD } from "./FiscalMonthTitle";
import { FISCALYEAR_TITLE_FIELD } from "../fiscalYear/FiscalYearTitle";

export const FiscalMonthShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="EndsOn" source="endsOn" />
        <ReferenceField
          label="FiscalYear"
          source="fiscalyear.id"
          reference="FiscalYear"
        >
          <TextField source={FISCALYEAR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="NormalizedName" source="mormalizedName" />
        <TextField label="Name" source="name" />
        <TextField label="Note" source="note" />
        <TextField label="StartsFrom" source="startsFrom" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="EmployeeSalary"
          target="fiscalMonthIdId"
          label="EmployeeSalaries"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="FiscalMonthId"
              source="fiscalmonth.id"
              reference="FiscalMonth"
            >
              <TextField source={FISCALMONTH_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="NetSalary" source="netSalary" />
            <TextField label="Note" source="note" />
            <TextField label="TotalDeserved" source="totalDeserved" />
            <TextField label="TotalDiscount" source="totalDiscount" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FiscalWeek"
          target="fiscalMonthIdId"
          label="FiscalWeeks"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="EndsOn" source="endsOn" />
            <ReferenceField
              label="FiscalMonthId"
              source="fiscalmonth.id"
              reference="FiscalMonth"
            >
              <TextField source={FISCALMONTH_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="StartsFrom" source="startsFrom" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
