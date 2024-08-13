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
        <TextInput label="Note" source="note" />
        <ReferenceInput
          source="printTemplateId.id"
          reference="PrintTemplate"
          label="PrintTemplateId"
        >
          <SelectInput optionText={PrintTemplateTitle} />
        </ReferenceInput>
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
