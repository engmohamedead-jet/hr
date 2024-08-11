import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AttributeTitle } from "../attribute/AttributeTitle";

export const AttributeValueCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
