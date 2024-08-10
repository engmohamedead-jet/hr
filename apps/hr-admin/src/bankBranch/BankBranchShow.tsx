import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BANKBRANCH_TITLE_FIELD } from "./BankBranchTitle";
import { BANK_TITLE_FIELD } from "../bank/BankTitle";

export const BankBranchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <ReferenceField label="BankId" source="bank.id" reference="Bank">
          <TextField source={BANK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Code" source="code" />
        <TextField label="ContactPhoneNumber" source="contactPhoneNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BankAccount"
          target="bankBranchIdId"
          label="BankAccounts"
        >
          <Datagrid rowClick="show">
            <TextField label="AccountNumber" source="accountNumber" />
            <ReferenceField
              label="BankBranchId"
              source="bankbranch.id"
              reference="BankBranch"
            >
              <TextField source={BANKBRANCH_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="BankId" source="bank.id" reference="Bank">
              <TextField source={BANK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="EPAN" source="epan" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
