import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SALARYITEM_TITLE_FIELD } from "../salaryItem/SalaryItemTitle";

export const EmployeeSalaryDetailShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Notes" source="notes" />
        <ReferenceField
          label="SalaryItemId"
          source="salaryitem.id"
          reference="SalaryItem"
        >
          <TextField source={SALARYITEM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="SalaryItemValue" source="salaryItemValue" />
        <TextField label="Serial" source="serial" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
