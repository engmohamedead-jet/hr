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
import { ELEVATOR_TITLE_FIELD } from "../elevator/ElevatorTitle";

export const CustomerUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CustomerUsers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AccessFailedCount" source="accessFailedCount" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="ElevatorId"
          source="elevator.id"
          reference="Elevator"
        >
          <TextField source={ELEVATOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Email" source="email" />
        <BooleanField label="EmailConfirmed" source="emailConfirmed" />
        <TextField label="EntityVersion" source="entityVersion" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <BooleanField label="IsExternal" source="isExternal" />
        <TextField
          label="LastPasswordChangeTime"
          source="lastPasswordChangeTime"
        />
        <BooleanField label="LockoutEnabled" source="lockoutEnabled" />
        <TextField label="LockoutEnd" source="lockoutEnd" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedEmail" source="normalizedEmail" />
        <TextField label="NormalizedUserName" source="normalizedUserName" />
        <TextField label="Note" source="note" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <BooleanField
          label="PhoneNumberConfirmed"
          source="phoneNumberConfirmed"
        />
        <TextField label="SecurityStamp" source="securityStamp" />
        <BooleanField
          label="ShouldChangePasswordOnNextLogin"
          source="shouldChangePasswordOnNextLogin"
        />
        <TextField label="Surname" source="surname" />
        <BooleanField label="TwoFactorEnabled" source="twoFactorEnabled" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="UserName" source="userName" />
      </Datagrid>
    </List>
  );
};
