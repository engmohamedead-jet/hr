import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ATTRIBUTEVALUE_TITLE_FIELD } from "./AttributeValueTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { ATTRIBUTE_TITLE_FIELD } from "../attribute/AttributeTitle";

export const AttributeValueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="AttributeId"
          source="attribute.id"
          reference="Attribute"
        >
          <TextField source={ATTRIBUTE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Value" source="value" />
        <ReferenceManyField
          reference="ProductVariant"
          target="attributeValueIdId"
          label="ProductVariants"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AttributeValueId"
              source="attributevalue.id"
              reference="AttributeValue"
            >
              <TextField source={ATTRIBUTEVALUE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="ProductId"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
