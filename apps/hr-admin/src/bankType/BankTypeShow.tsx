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

import { BANKTYPE_TITLE_FIELD } from "./BankTypeTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const BankTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField label="Tenant" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Bank" target="bankTypeId" label="Banks">
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <ReferenceField
              label="BankType"
              source="banktype.id"
              reference="BankType"
            >
              <TextField source={BANKTYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="CellPhoneNumber" source="cellPhoneNumber" />
            <TextField label="Code" source="code" />
            <TextField label="ContactPhoneNumber" source="contactPhoneNumber" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Fax" source="fax" />
            <TextField label="HomePhoneNumber" source="homePhoneNumber" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField
              label="RelationshipOfficerContactNumber"
              source="relationshipOfficerContactNumber"
            />
            <TextField
              label="RelationshipOfficerName"
              source="relationshipOfficerName"
            />
            <TextField label="Street" source="street" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
