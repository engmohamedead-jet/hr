import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CurrencySettingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Key" source="key" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
