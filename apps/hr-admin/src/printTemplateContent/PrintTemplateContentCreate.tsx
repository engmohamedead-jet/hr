import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PrintTemplateTitle } from "../printTemplate/PrintTemplateTitle";

export const PrintTemplateContentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
