import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AccountCategoryTitle } from "../accountCategory/AccountCategoryTitle";
import { AccountTypeTitle } from "../accountType/AccountTypeTitle";
import { CurrencyTitle } from "../currency/CurrencyTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="accountCategory.id"
          reference="AccountCategory"
          label="AccountCategoryId"
        >
          <SelectInput optionText={AccountCategoryTitle} />
        </ReferenceInput>
        <TextInput label="AccountNumber" source="accountNumber" />
        <ReferenceInput
          source="accountTypeId.id"
          reference="AccountType"
          label="AccountTypeId"
        >
          <SelectInput optionText={AccountTypeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="currencyId.id"
          reference="Currency"
          label="CurrencyId"
        >
          <SelectInput optionText={CurrencyTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsMasterAccount" source="isMasterAccount" />
        <BooleanInput label="IsUnderRevision" source="isUnderRevision" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" source="note" />
        <TextInput label="ParentAccountId" source="parentAccountId" />
        <TextInput label="ReferenceNumber" source="referenceNumber" />
      </SimpleForm>
    </Edit>
  );
};
