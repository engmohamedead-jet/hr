import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const FailureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="FailureDate" source="failureDate" />
        <TextInput label="FailureReport" source="failureReport" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput step={1} label="Serial" source="serial" />
      </SimpleForm>
    </Create>
  );
};
