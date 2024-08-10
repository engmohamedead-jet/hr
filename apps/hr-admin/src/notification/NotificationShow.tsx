import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { OFFICE_TITLE_FIELD } from "../office/OfficeTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const NotificationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="EventDateTime" source="eventDateTime" />
        <TextField label="Icon" source="icon" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsSystem" source="isSystem" />
        <TextField label="Note" source="note" />
        <TextField label="NotificationText" source="notificationText" />
        <ReferenceField label="Office" source="office.id" reference="Office">
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
      </SimpleShowLayout>
    </Show>
  );
};
