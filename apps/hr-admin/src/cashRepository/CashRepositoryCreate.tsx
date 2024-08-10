import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CashRepositoryTitle } from "./CashRepositoryTitle";

export const CashRepositoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="cashRepositories.id"
          reference="CashRepository"
          label="CashRepositories"
        >
          <SelectInput optionText={CashRepositoryTitle} />
        </ReferenceInput>
        <TextInput label="Code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="parentCashRepositoryId.id"
          reference="CashRepository"
          label="ParentCashRepositoryId"
        >
          <SelectInput optionText={CashRepositoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
