import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CurrencySettingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Key" source="key" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Create>
  );
};
