import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { OFFICE_TITLE_FIELD } from "./OfficeTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { STORETYPE_TITLE_FIELD } from "../storeType/StoreTypeTitle";

export const OfficeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="CellPhoneNumber" source="cellPhoneNumber" />
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Fax" source="fax" />
        <TextField label="HomePhoneNumber" source="homePhoneNumber" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Notification"
          target="officeIdId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="EventDateTime" source="eventDateTime" />
            <TextField label="Icon" source="icon" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsSystem" source="isSystem" />
            <TextField label="Note" source="note" />
            <TextField label="NotificationText" source="notificationText" />
            <ReferenceField
              label="Office"
              source="office.id"
              reference="Office"
            >
              <TextField source={OFFICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Store" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ToLoginId" source="toLoginId" />
            <TextField label="ToRoleId" source="toRoleId" />
            <TextField label="ToUserId" source="toUserId" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Store" target="officeId" label="Stores">
          <Datagrid rowClick="show">
            <TextField label="AddressLine1" source="addressLine1" />
            <BooleanField label="AllowSale" source="allowSale" />
            <TextField label="CellPhoneNumber" source="cellPhoneNumber" />
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Fax" source="fax" />
            <TextField label="HomePhoneNumber" source="homePhoneNumber" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="OfficeId"
              source="office.id"
              reference="Office"
            >
              <TextField source={OFFICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="StoreTypeId"
              source="storetype.id"
              reference="StoreType"
            >
              <TextField source={STORETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Street" source="street" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
