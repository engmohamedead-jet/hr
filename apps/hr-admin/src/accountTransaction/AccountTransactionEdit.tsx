import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { AccountTransactionDetailTitle } from "../accountTransactionDetail/AccountTransactionDetailTitle";
import { CostCenterTitle } from "../costCenter/CostCenterTitle";
import { StoreTitle } from "../store/StoreTitle";

export const AccountTransactionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accountTransactionDetails"
          reference="AccountTransactionDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTransactionDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="costCenter.id"
          reference="CostCenter"
          label="CostCenterId"
        >
          <SelectInput optionText={CostCenterTitle} />
        </ReferenceInput>
        <TextInput label="Note" source="note" />
        <TextInput label="ReferenceNumber" source="referenceNumber" />
        <TextInput label="StatementReference" source="statementReference" />
        <ReferenceInput source="store.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <DateTimeInput label="TransactionDate" source="transactionDate" />
      </SimpleForm>
    </Edit>
  );
};
