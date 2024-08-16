import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ProductionDocumentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Note" multiline source="note" />
        <TextInput label="Priority" source="priority" />
      </SimpleForm>
    </Edit>
  );
};
