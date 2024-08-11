import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const FailureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="FailureDate" source="failureDate" />
        <TextInput label="FailureReport" source="failureReport" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput step={1} label="Serial" source="serial" />
      </SimpleForm>
    </Edit>
  );
};
