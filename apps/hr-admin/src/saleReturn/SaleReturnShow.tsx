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

import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { SALEPRICETYPE_TITLE_FIELD } from "../salePriceType/SalePriceTypeTitle";
import { SALERETURN_TITLE_FIELD } from "./SaleReturnTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { CASHREPOSITORY_TITLE_FIELD } from "../cashRepository/CashRepositoryTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { INVOICETYPE_TITLE_FIELD } from "../invoiceType/InvoiceTypeTitle";
import { PAYMENTTYPE_TITLE_FIELD } from "../paymentType/PaymentTypeTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const SaleReturnShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="CashRepositoryId"
          source="cashrepository.id"
          reference="CashRepository"
        >
          <TextField source={CASHREPOSITORY_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="CustomerId"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="DiscountTotal" source="discountTotal" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="InvoiceTypeId"
          source="invoicetype.id"
          reference="InvoiceType"
        >
          <TextField source={INVOICETYPE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsCancelled" source="isCancelled" />
        <BooleanField label="IsReplicated" source="isReplicated" />
        <TextField label="NetTotal" source="netTotal" />
        <TextField label="NonTaxableTotal" source="nonTaxableTotal" />
        <TextField label="Note" source="note" />
        <TextField label="Paid" source="paid" />
        <ReferenceField
          label="PaymentTypeId"
          source="paymenttype.id"
          reference="PaymentType"
        >
          <TextField source={PAYMENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ReferenceNumber" source="referenceNumber" />
        <TextField label="Remaining" source="remaining" />
        <TextField label="ReturnTotal" source="returnTotal" />
        <ReferenceField label="SaleId" source="sale.id" reference="Sale">
          <TextField source={SALE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="SalePriceTypeId"
          source="salepricetype.id"
          reference="SalePriceType"
        >
          <TextField source={SALEPRICETYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="SaleReturnDate" source="saleReturnDate" />
        <TextField label="Sequence" source="sequence" />
        <ReferenceField label="StoreId" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Tax" source="tax" />
        <TextField label="TaxRate" source="taxRate" />
        <TextField label="TaxableTotal" source="taxableTotal" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SaleReturnDetail"
          target="saleReturnIdId"
          label="SaleReturnDetails"
        >
          <Datagrid rowClick="show">
            <TextField label="Barcode" source="barcode" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Discount" source="discount" />
            <TextField label="DiscountRate" source="discountRate" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsError" source="isError" />
            <BooleanField label="IsReplicated" source="isReplicated" />
            <BooleanField label="IsTaxed" source="isTaxed" />
            <TextField label="Price" source="price" />
            <TextField label="PriceTotal" source="priceTotal" />
            <ReferenceField
              label="ProductId"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="ProductSerialNumber"
              source="productSerialNumber"
            />
            <ReferenceField
              label="ProductVariantId"
              source="productvariant.id"
              reference="ProductVariant"
            >
              <TextField source={PRODUCTVARIANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <ReferenceField
              label="SalePriceType"
              source="salepricetype.id"
              reference="SalePriceType"
            >
              <TextField source={SALEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SaleReturnId"
              source="salereturn.id"
              reference="SaleReturn"
            >
              <TextField source={SALERETURN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sequence" source="sequence" />
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
