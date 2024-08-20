import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PRODUCTVARIANT_TITLE_FIELD } from "../productVariant/ProductVariantTitle";
import { SALEORDER_TITLE_FIELD } from "./SaleOrderTitle";
import { SALEPRICETYPE_TITLE_FIELD } from "../salePriceType/SalePriceTypeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { CASHREPOSITORY_TITLE_FIELD } from "../cashRepository/CashRepositoryTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { INVOICETYPE_TITLE_FIELD } from "../invoiceType/InvoiceTypeTitle";
import { ORDERSTATUS_TITLE_FIELD } from "../orderStatus/OrderStatusTitle";
import { PAYMENTSTATUS_TITLE_FIELD } from "../paymentStatus/PaymentStatusTitle";
import { PAYMENTTYPE_TITLE_FIELD } from "../paymentType/PaymentTypeTitle";
import { SALEQUOTATION_TITLE_FIELD } from "../saleQuotation/SaleQuotationTitle";
import { SHIPPINGSTATUS_TITLE_FIELD } from "../shippingStatus/ShippingStatusTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const SaleOrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BillingAddress" source="billingAddress" />
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
        <TextField label="DeliveryDate" source="deliveryDate" />
        <TextField label="DiscountTotal" source="discountTotal" />
        <TextField label="ExpectedDeliveryDate" source="expectedDeliveryDate" />
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
        <ReferenceField
          label="OrderStatus"
          source="orderstatus.id"
          reference="OrderStatus"
        >
          <TextField source={ORDERSTATUS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="PaymentStatus"
          source="paymentstatus.id"
          reference="PaymentStatus"
        >
          <TextField source={PAYMENTSTATUS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="PaymentTypeId"
          source="paymenttype.id"
          reference="PaymentType"
        >
          <TextField source={PAYMENTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ReferenceNumber" source="referenceNumber" />
        <TextField label="SaleOrderDate" source="saleOrderDate" />
        <ReferenceField
          label="SalePriceType"
          source="salepricetype.id"
          reference="SalePriceType"
        >
          <TextField source={SALEPRICETYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="SalePriceTypeId" source="salePriceTypeId" />
        <ReferenceField
          label="SaleQuotationId"
          source="salequotation.id"
          reference="SaleQuotation"
        >
          <TextField source={SALEQUOTATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="SaleTotal" source="saleTotal" />
        <TextField label="ShippingAddress" source="shippingAddress" />
        <TextField label="ShippingCost" source="shippingCost" />
        <ReferenceField
          label="ShippingStatus"
          source="shippingstatus.id"
          reference="ShippingStatus"
        >
          <TextField source={SHIPPINGSTATUS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="StoreId" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Tax" source="tax" />
        <TextField label="TaxRate" source="taxRate" />
        <TextField label="TaxableTotal" source="taxableTotal" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TransactionDateTime" source="transactionDateTime" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SaleOrderDetail"
          target="saleOrderId"
          label="SaleOrderDetails"
        >
          <Datagrid rowClick="show">
            <TextField label="Barcode" source="barcode" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Discount" source="discount" />
            <TextField label="DiscountRate" source="discountRate" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <BooleanField label="IsError" source="isError" />
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
              label="SaleOrderId"
              source="saleorder.id"
              reference="SaleOrder"
            >
              <TextField source={SALEORDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SalePriceTypeId"
              source="salepricetype.id"
              reference="SalePriceType"
            >
              <TextField source={SALEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Sequence" source="sequence" />
            <ReferenceField
              label="Tenant"
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
