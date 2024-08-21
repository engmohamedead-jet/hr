import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const SaleQuotationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SaleQuotations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
