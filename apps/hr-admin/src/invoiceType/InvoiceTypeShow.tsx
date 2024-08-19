import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CASHREPOSITORY_TITLE_FIELD } from "../cashRepository/CashRepositoryTitle";
import { INVOICETYPE_TITLE_FIELD } from "./InvoiceTypeTitle";
import { PAYMENTTYPE_TITLE_FIELD } from "../paymentType/PaymentTypeTitle";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";
import { PURCHASEPRICETYPE_TITLE_FIELD } from "../purchasePriceType/PurchasePriceTypeTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { SALE_TITLE_FIELD } from "../sale/SaleTitle";
import { SALEPRICETYPE_TITLE_FIELD } from "../salePriceType/SalePriceTypeTitle";

export const InvoiceTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PurchaseReturn"
          target="invoiceTypeIdId"
          label="PurchaseReturns"
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
            <ReferenceField
              label="PurchaseId"
              source="purchase.id"
              reference="Purchase"
            >
              <TextField source={PURCHASE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="PurchasePriceTypeId"
              source="purchasepricetype.id"
              reference="PurchasePriceType"
            >
              <TextField source={PURCHASEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="PurchaseReturnDate" source="purchaseReturnDate" />
            <TextField
              label="PurchaseReturnTotal"
              source="purchaseReturnTotal"
            />
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="Remaining" source="remaining" />
            <TextField label="SequenceNumber" source="sequenceNumber" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SupplierId"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tax" source="tax" />
            <TextField label="TaxRate" source="taxRate" />
            <TextField label="TaxableTotal" source="taxableTotal" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Purchase"
          target="invoiceTypeIdId"
          label="Purchases"
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
            <TextField label="PurchaseDate" source="purchaseDate" />
            <ReferenceField
              label="PurchasePriceTypeId"
              source="purchasepricetype.id"
              reference="PurchasePriceType"
            >
              <TextField source={PURCHASEPRICETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="PurchaseTotal" source="purchaseTotal" />
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="Remaining" source="remaining" />
            <TextField label="SequenceNumber" source="sequenceNumber" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="SupplierId"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tax" source="tax" />
            <TextField label="TaxRate" source="taxRate" />
            <TextField label="TaxableTotal" source="taxableTotal" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SaleReturn"
          target="invoiceTypeIdId"
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
          target="invoiceTypeIdId"
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
      </SimpleShowLayout>
    </Show>
  );
};
