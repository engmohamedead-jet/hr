import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STORETYPE_TITLE_FIELD } from "./StoreTypeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const StoreTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsDefault" source="isDefault" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Store"
          target="storeTypIdId"
          label="Stores"
        >
          <Datagrid rowClick="show">
            <TextField label="AddressLine1" source="addressLine1" />
            <BooleanField label="AllowSale" source="allowSale" />
            <TextField label="CellPhoneNumber" source="cellPhoneNumber" />
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Fax" source="fax" />
            <TextField label="HomePhoneNumber" source="homePhoneNumber" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="StoreTypeId"
              source="storetype.id"
              reference="StoreType"
            >
              <TextField source={STORETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Street" source="street" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
