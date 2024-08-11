import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { InstallationContractTitle } from "../installationContract/InstallationContractTitle";

export const ContractStatusCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="Codec" />
        <TextInput label="code" source="code" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="installationContracts.id"
          reference="InstallationContract"
          label="InstallationContracts"
        >
          <SelectInput optionText={InstallationContractTitle} />
        </ReferenceInput>
        <BooleanInput label="isActive" source="isActive" />
        <TextInput label="Name" multiline source="name" />
        <TextInput label="Note" multiline source="note" />
      </SimpleForm>
    </Create>
  );
};
