import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const InvoiceTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
      </SimpleForm>
    </Edit>
  );
};
