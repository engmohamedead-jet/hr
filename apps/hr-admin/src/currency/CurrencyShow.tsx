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

import { CURRENCY_TITLE_FIELD } from "./CurrencyTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const CurrencyShow = (props: ShowProps): React.ReactElement => {
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
          reference="Customer"
          target="currencyIdId"
          label="Customers"
        >
          <Datagrid rowClick="show">
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
        <ReferenceManyField
          reference="Supplier"
          target="currencyId"
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
