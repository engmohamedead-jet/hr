import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";

export const CustomerList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Customers"}
      perPage={50}
      pagination={<Pagination />}
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
      </Datagrid>
    </List>
  );
};
