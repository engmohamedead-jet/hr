import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PrintTemplateTitle } from "../printTemplate/PrintTemplateTitle";

export const PrintTemplateContentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Display" source="display" />
        <TextInput label="FieldValue" source="fieldValue" />
        <TextInput label="Key" source="key" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="printTemplate.id"
          reference="PrintTemplate"
          label="PrintTemplate"
        >
          <SelectInput optionText={PrintTemplateTitle} />
        </ReferenceInput>
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
