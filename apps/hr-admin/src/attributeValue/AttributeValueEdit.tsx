import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AttributeTitle } from "../attribute/AttributeTitle";

export const AttributeValueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="attributeId.id"
          reference="Attribute"
          label="AttributeId"
        >
          <SelectInput optionText={AttributeTitle} />
        </ReferenceInput>
        <TextInput label="Note" source="note" />
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
