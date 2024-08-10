import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FISCALYEAR_TITLE_FIELD } from "./FiscalYearTitle";

export const FiscalYearShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="EndsOn" source="endsOn" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsEodRequired" source="isEodRequired" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="notes" />
        <TextField label="StartsFrom" source="startsFrom" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="FiscalMonth"
          target="fiscalYearId"
          label="FiscalMonths"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
