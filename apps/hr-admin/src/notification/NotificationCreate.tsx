import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";

import { OfficeTitle } from "../office/OfficeTitle";
import { StoreTitle } from "../store/StoreTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const NotificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EventDateTime" source="eventDateTime" />
        <TextInput label="Icon" source="icon" />
        <BooleanInput label="IsSystem" source="isSystem" />
        <TextInput label="Note" source="note" />
        <TextInput label="NotificationText" source="notificationText" />
        <ReferenceInput source="officeId.id" reference="Office" label="Office">
          <SelectInput optionText={OfficeTitle} />
        </ReferenceInput>
        <ReferenceInput source="store.id" reference="Store" label="Store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <TextInput label="ToLoginId" source="toLoginId" />
        <SelectArrayInput
          source="toRoleId"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="ToUserId" source="toUserId" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
