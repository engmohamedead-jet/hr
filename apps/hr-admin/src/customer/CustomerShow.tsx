import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BILLOFMATERIAL_TITLE_FIELD } from "../billOfMaterial/BillOfMaterialTitle";
import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { ORDERSTATUS_TITLE_FIELD } from "../orderStatus/OrderStatusTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="DefaultSalePriceTypeId"
          source="DefaultSalePriceTypeId"
        />
        <TextField label="Address" source="address" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Credit" source="credit" />
        <ReferenceField
          label="Currency"
          source="currency.id"
          reference="Currency"
        >
          <TextField source={CURRENCY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Debit" source="debit" />
        <TextField label="Description" source="description" />
        <TextField label="Email" source="email" />
        <TextField label="FirstBalance" source="firstBalance" />
        <TextField label="FirstBalanceDate" source="firstBalanceDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsSystem" source="isSystem" />
        <BooleanField label="IsUnderRevision" source="isUnderRevision" />
        <TextField label="MaxAllowedDebit" source="maxAllowedDebit" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <TextField label="PreviousBalance" source="previousBalance" />
        <TextField label="RevisionDate" source="revisionDate" />
        <TextField label="SaleDiscountRate" source="saleDiscountRate" />
        <TextField label="SupplierId" source="supplierId" />
        <TextField label="TaxNumber" source="taxNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Website" source="website" />
        <ReferenceManyField
          reference="ProductionOrder"
          target="customerIdId"
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
