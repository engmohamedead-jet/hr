import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { INSTALLATIONCONTRACT_TITLE_FIELD } from "../installationContract/InstallationContractTitle";

export const ContractStatusList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ContractStatuses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
