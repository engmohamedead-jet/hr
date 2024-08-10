import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { FISCALMONTH_TITLE_FIELD } from "../fiscalMonth/FiscalMonthTitle";

export const FiscalWeekShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
