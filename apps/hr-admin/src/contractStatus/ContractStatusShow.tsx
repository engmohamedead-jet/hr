import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { INSTALLATIONCONTRACT_TITLE_FIELD } from "../installationContract/InstallationContractTitle";

export const ContractStatusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="Codec" />
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="InstallationContracts"
          source="installationcontract.id"
          reference="InstallationContract"
        >
          <TextField source={INSTALLATIONCONTRACT_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="isActive" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
