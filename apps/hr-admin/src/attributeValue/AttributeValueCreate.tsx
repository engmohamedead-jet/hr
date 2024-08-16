import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AttributeTitle } from "../attribute/AttributeTitle";
import { ProductVariantTitle } from "../productVariant/ProductVariantTitle";

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
    </Create>
  );
};
