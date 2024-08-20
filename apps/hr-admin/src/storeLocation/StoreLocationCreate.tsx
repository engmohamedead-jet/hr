import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  BooleanInput,
  ReferenceInput,
} from "react-admin";

import { StoreTitle } from "../store/StoreTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const StoreLocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <SelectInput
          source="createdAtSide"
          label="CreatedAtSide"
          choices={[
            { label: "Server", value: "Server" },
            { label: "Client", value: "Client" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="IsActive" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" source="note" />
        <ReferenceInput source="storeId.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="tenantId.id"
          reference="Tenant"
          label="TenantId"
        >
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
