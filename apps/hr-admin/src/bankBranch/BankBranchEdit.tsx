import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { BankAccountTitle } from "../bankAccount/BankAccountTitle";
import { BankTitle } from "../bank/BankTitle";

export const BankBranchEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <ReferenceArrayInput
          source="bankAccounts"
          reference="BankAccount"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BankAccountTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="bankId.id" reference="Bank" label="BankId">
          <SelectInput optionText={BankTitle} />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <TextInput label="ContactPhoneNumber" source="contactPhoneNumber" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
      </SimpleForm>
    </Edit>
  );
};
