import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const FailureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="FailureDate" source="failureDate" />
        <TextField label="FailureReport" source="failureReport" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="Serial" source="serial" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
