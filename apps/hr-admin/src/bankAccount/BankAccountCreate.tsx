import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BankBranchTitle } from "../bankBranch/BankBranchTitle";
import { BankTitle } from "../bank/BankTitle";

export const BankAccountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="AccountNumber" source="accountNumber" />
        <ReferenceInput
          source="bankBranchId.id"
          reference="BankBranch"
          label="BankBranchId"
        >
          <SelectInput optionText={BankBranchTitle} />
        </ReferenceInput>
        <ReferenceInput source="bankId.id" reference="Bank" label="BankId">
          <SelectInput optionText={BankTitle} />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="EPAN" source="epan" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
      </SimpleForm>
    </Create>
  );
};
