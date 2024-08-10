import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AccountTransactionTitle } from "../accountTransaction/AccountTransactionTitle";
import { StoreTitle } from "../store/StoreTitle";
import { TransactionTypeTitle } from "../transactionType/TransactionTypeTitle";

export const AccountTransactionDetailCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="accountTransactionId.id"
          reference="AccountTransaction"
          label="AccountTransactionId"
        >
          <SelectInput optionText={AccountTransactionTitle} />
        </ReferenceInput>
        <NumberInput label="Credit" source="credit" />
        <NumberInput label="Debit" source="debit" />
        <NumberInput label="ExchangeRate" source="exchangeRate" />
        <TextInput label="Note" source="note" />
        <TextInput label="ReferenceNumber" source="referenceNumber" />
        <NumberInput step={1} label="Serial" source="serial" />
        <TextInput label="StatementReference" source="statementReference" />
        <ReferenceInput source="storeId.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <DateTimeInput label="TransactionDate" source="transactionDate" />
        <ReferenceInput
          source="transactionTypeId.id"
          reference="TransactionType"
          label="TransactionTypeId"
        >
          <SelectInput optionText={TransactionTypeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
