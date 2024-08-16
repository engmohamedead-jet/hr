import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BILLOFMATERIAL_TITLE_FIELD } from "./BillOfMaterialTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { WORKCENTERROUTING_TITLE_FIELD } from "../workCenterRouting/WorkCenterRoutingTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { ORDERSTATUS_TITLE_FIELD } from "../orderStatus/OrderStatusTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { BILLOFMATERIALTYPE_TITLE_FIELD } from "../billOfMaterialType/BillOfMaterialTypeTitle";

export const BillOfMaterialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="BillOfMaterialDetail"
          target="billOfMaterialId"
          label="BillOfMaterialDetails"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductionOrder"
          target="billOfMaterialIdId"
          label="ProductionOrders"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="BillOfMaterialId"
              source="billofmaterial.id"
              reference="BillOfMaterial"
            >
              <TextField source={BILLOFMATERIAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerId"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="DeadlineDate" source="deadlineDate" />
            <TextField label="Description" source="description" />
            <TextField label="FinishDate" source="finishDate" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="OrderDate" source="orderDate" />
            <ReferenceField
              label="OrderStatusId"
              source="orderstatus.id"
              reference="OrderStatus"
            >
              <TextField source={ORDERSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ProductId"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ProductQuantity" source="productQuantity" />
            <TextField label="SequenceNumber" source="sequenceNumber" />
            <TextField label="StartDate" source="startDate" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="UnitId" source="unit.id" reference="Unit">
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
