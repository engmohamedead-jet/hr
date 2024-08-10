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
import { ACCOUNTCATEGORY_TITLE_FIELD } from "../accountCategory/AccountCategoryTitle";
import { ACCOUNTTYPE_TITLE_FIELD } from "../accountType/AccountTypeTitle";
import { CURRENCY_TITLE_FIELD } from "../currency/CurrencyTitle";

export const AccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Accounts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="AccountCategoryId"
          source="accountcategory.id"
          reference="AccountCategory"
        >
          <TextField source={ACCOUNTCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="AccountNumber" source="accountNumber" />
        <ReferenceField
          label="AccountTypeId"
          source="accounttype.id"
          reference="AccountType"
        >
          <TextField source={ACCOUNTTYPE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="CurrencyId"
          source="currency.id"
          reference="Currency"
        >
          <TextField source={CURRENCY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsMasterAccount" source="isMasterAccount" />
        <BooleanField label="IsUnderRevision" source="isUnderRevision" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="ParentAccountId" source="parentAccountId" />
        <TextField label="ReferenceNumber" source="referenceNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};