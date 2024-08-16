import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AttributeTitle } from "../attribute/AttributeTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";

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
        <TextInput label="Note" multiline source="note" />
        <ReferenceArrayInput
          source="productVariants"
          reference="ProductVariant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductVariantTitle} />
        </ReferenceArrayInput>
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
