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
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";
import { SALEQUOTATION_TITLE_FIELD } from "../saleQuotation/SaleQuotationTitle";
import { CASHREPOSITORY_TITLE_FIELD } from "../cashRepository/CashRepositoryTitle";
import { INVOICETYPE_TITLE_FIELD } from "../invoiceType/InvoiceTypeTitle";
import { PAYMENTTYPE_TITLE_FIELD } from "../paymentType/PaymentTypeTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";
import { SALEPRICETYPE_TITLE_FIELD } from "../salePriceType/SalePriceTypeTitle";
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
          label="CurrencyId"
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
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
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
            <BooleanField label="IsActive" source="isActive" />
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
        <ReferenceManyField
          reference="SaleOrder"
          target="customerIdId"
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
          reference="SaleReturn"
          target="customerIdId"
          label="SaleReturns"
        >
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Sale"
          target="customerIdId"
          label="Sales"
        >
          <Datagrid rowClick="show">
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
            <TextField label="SaleDate" source="saleDate" />
            <ReferenceField
              label="SalePriceTypeId"
              source="salepricetype.id"
              reference="SalePriceType"
            >
              <TextField source={SALEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="SaleTotal" source="saleTotal" />
            <TextField label="SequenceNumber" source="sequenceNumber" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tax" source="tax" />
            <TextField label="TaxRate" source="taxRate" />
            <TextField label="TaxableTotal" source="taxableTotal" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Supplier"
          target="customerIdId"
          label="Suppliers"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Credit" source="credit" />
            <ReferenceField
              label="CurrencyId"
              source="currency.id"
              reference="Currency"
            >
              <TextField source={CURRENCY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="CustomerId"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Debit" source="debit" />
            <TextField label="Description" source="description" />
            <TextField label="Email" source="email" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="PhoneNumber" source="phoneNumber" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Website" source="website" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
