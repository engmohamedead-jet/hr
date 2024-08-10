import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNTTRANSACTION_TITLE_FIELD } from "./AccountTransactionTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { TRANSACTIONTYPE_TITLE_FIELD } from "../transactionType/TransactionTypeTitle";
import { COSTCENTER_TITLE_FIELD } from "../costCenter/CostCenterTitle";

export const AccountTransactionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="CostCenterId"
          source="costcenter.id"
          reference="CostCenter"
        >
          <TextField source={COSTCENTER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="ReferenceNumber" source="referenceNumber" />
        <TextField label="StatementReference" source="statementReference" />
        <ReferenceField label="StoreId" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TransactionDate" source="transactionDate" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AccountTransactionDetail"
          target="accountTransactionIdId"
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
