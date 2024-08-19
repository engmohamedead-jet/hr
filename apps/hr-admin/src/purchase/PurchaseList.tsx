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
import { CASHREPOSITORY_TITLE_FIELD } from "../cashRepository/CashRepositoryTitle";
import { INVOICETYPE_TITLE_FIELD } from "../invoiceType/InvoiceTypeTitle";
import { PAYMENTTYPE_TITLE_FIELD } from "../paymentType/PaymentTypeTitle";
import { PURCHASEPRICETYPE_TITLE_FIELD } from "../purchasePriceType/PurchasePriceTypeTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const PurchaseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Purchases"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
