import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { SALEQUOTATION_TITLE_FIELD } from "./SaleQuotationTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { SALEPRICETYPE_TITLE_FIELD } from "../salePriceType/SalePriceTypeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";

export const SaleQuotationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Discount" source="discount" />
        <TextField label="DiscountRate" source="discountRate" />
        <TextField label="ExpectedDeliveryDate" source="expectedDeliveryDate" />
        <TextField label="ID" source="id" />
        <TextField label="InternalMemo" source="internalMemo" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsCancelled" source="isCancelled" />
        <TextField label="NonTaxableTotal" source="nonTaxableTotal" />
        <TextField label="Note" source="note" />
        <TextField label="ReferenceNumber" source="referenceNumber" />
        <TextField label="SaleQuotationDate" source="saleQuotationDate" />
        <TextField label="SequenceNumber" source="sequenceNumber" />
        <TextField label="TaxRate" source="taxRate" />
        <TextField label="TaxTotal" source="taxTotal" />
        <TextField label="TaxableTotal" source="taxableTotal" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Terms" source="terms" />
        <TextField label="TransactionDateTime" source="transactionDateTime" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SaleOrder"
          target="saleQuotationId"
          label="SaleOrders"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerId"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="SaleOrderDate" source="saleOrderDate" />
            <ReferenceField
              label="SaleQuotation"
              source="salequotation.id"
              reference="SaleQuotation"
            >
              <TextField source={SALEQUOTATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SaleQuotationDetail"
          target="saleQuotationIdId"
          label="SaleQuotationDetails"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Discount" source="discount" />
            <TextField label="DiscountRate" source="discountRate" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsError" source="isError" />
            <BooleanField label="IsReplicated" source="isReplicated" />
            <BooleanField label="IsTaxed" source="isTaxed" />
            <TextField label="Note" source="note" />
            <TextField label="Price" source="price" />
            <TextField label="PriceTotal" source="priceTotal" />
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
            <ReferenceField
              label="SalePriceTypeId"
              source="salepricetype.id"
              reference="SalePriceType"
            >
              <TextField source={SALEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SaleQuotationId"
              source="salequotation.id"
              reference="SaleQuotation"
            >
              <TextField source={SALEQUOTATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sequence" source="sequence" />
            <TextField label="ShippingCharge" source="shippingCharge" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
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
