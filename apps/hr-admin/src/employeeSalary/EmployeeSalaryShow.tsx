import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { FISCALMONTH_TITLE_FIELD } from "../fiscalMonth/FiscalMonthTitle";

export const EmployeeSalaryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
