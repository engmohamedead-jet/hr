import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ATTRIBUTEVALUE_TITLE_FIELD } from "../attributeValue/AttributeValueTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const ProductVariantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProductVariants"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
