import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BANKBRANCH_TITLE_FIELD } from "../bankBranch/BankBranchTitle";
import { BANK_TITLE_FIELD } from "../bank/BankTitle";

export const BankAccountList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BankAccounts"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
