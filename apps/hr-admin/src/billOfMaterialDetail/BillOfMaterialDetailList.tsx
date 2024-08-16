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
import { BILLOFMATERIAL_TITLE_FIELD } from "../billOfMaterial/BillOfMaterialTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { WORKCENTERROUTING_TITLE_FIELD } from "../workCenterRouting/WorkCenterRoutingTitle";

export const BillOfMaterialDetailList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BillOfMaterialDetails"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="BillOfMaterial"
          source="billofmaterial.id"
          reference="BillOfMaterial"
        >
          <TextField source={BILLOFMATERIAL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="CostShare" source="costShare" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField
          label="IsManualConsumption"
          source="isManualConsumption"
        />
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
        <ReferenceField label="UnitId" source="unit.id" reference="Unit">
          <TextField source={UNIT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="WorkCenterRoutingId"
          source="workcenterrouting.id"
          reference="WorkCenterRouting"
        >
          <TextField source={WORKCENTERROUTING_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
