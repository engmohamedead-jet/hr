import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Balance" source="balance" />
        <NumberInput label="LastYearBalance" source="lastYearBalance" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <NumberInput label="RemainingBalance" source="remainingBalance" />
        <NumberInput label="UsedBalance" source="usedBalance" />
      </SimpleForm>
    </Edit>
  );
};
