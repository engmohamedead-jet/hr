import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ACCOUNTTRANSACTION_TITLE_FIELD } from "../accountTransaction/AccountTransactionTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { TRANSACTIONTYPE_TITLE_FIELD } from "./TransactionTypeTitle";

export const TransactionTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AccountTransactionDetail"
          target="transactionTypeIdId"
          label="AccountTransactionDetails"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AccountTransactionId"
              source="accounttransaction.id"
              reference="AccountTransaction"
            >
              <TextField source={ACCOUNTTRANSACTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Credit" source="credit" />
            <TextField label="Debit" source="debit" />
            <TextField label="ExchangeRate" source="exchangeRate" />
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="Serial" source="serial" />
            <TextField label="StatementReference" source="statementReference" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TransactionDate" source="transactionDate" />
            <ReferenceField
              label="TransactionTypeId"
              source="transactiontype.id"
              reference="TransactionType"
            >
              <TextField source={TRANSACTIONTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
