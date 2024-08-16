import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ProductionDocumentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="Priority" source="priority" />
      </SimpleForm>
    </Create>
  );
};
