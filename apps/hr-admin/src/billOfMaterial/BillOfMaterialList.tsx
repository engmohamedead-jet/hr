import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { BILLOFMATERIALTYPE_TITLE_FIELD } from "../billOfMaterialType/BillOfMaterialTypeTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";

export const BillOfMaterialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BillOfMaterials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="BillOfMaterialTypeId"
          source="billofmaterialtype.id"
          reference="BillOfMaterialType"
        >
          <TextField source={BILLOFMATERIALTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField
          label="DaysToPrepareManufacturingOrder"
          source="daysToPrepareManufacturingOrder"
        />
        <TextField label="EndDate" source="endDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="ProductId"
          source="product.id"
          reference="Product"
        >
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="ProductVariantId"
          source="productvariant.id"
          reference="ProductVariant"
        >
          <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <TextField label="Sequence" source="sequence" />
        <TextField label="StartDate" source="startDate" />
        <ReferenceField label="UnitId" source="unit.id" reference="Unit">
          <TextField source={UNIT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
