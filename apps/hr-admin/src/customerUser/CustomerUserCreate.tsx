import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  PasswordInput,
} from "react-admin";

import { ElevatorTitle } from "../elevator/ElevatorTitle";
import { FailureReportingTitle } from "../failureReporting/FailureReportingTitle";
import { MaintenanceContractTitle } from "../maintenanceContract/MaintenanceContractTitle";
import { PeriodicMaintenanceOrderTitle } from "../periodicMaintenanceOrder/PeriodicMaintenanceOrderTitle";

export const CustomerUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="AccessFailedCount"
          source="accessFailedCount"
        />
        <ReferenceInput
          source="elevatorId.id"
          reference="Elevator"
          label="ElevatorId"
        >
          <SelectInput optionText={ElevatorTitle} />
        </ReferenceInput>
        <TextInput label="Email" source="email" type="email" />
        <BooleanInput label="EmailConfirmed" source="emailConfirmed" />
        <TextInput label="EntityVersion" source="entityVersion" />
        <ReferenceArrayInput
          source="failureReportings"
          reference="FailureReporting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FailureReportingTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="IsActive" source="isActive" />
        <BooleanInput label="IsExternal" source="isExternal" />
        <DateTimeInput
          label="LastPasswordChangeTime"
          source="lastPasswordChangeTime"
        />
        <BooleanInput label="LockoutEnabled" source="lockoutEnabled" />
        <DateTimeInput label="LockoutEnd" source="lockoutEnd" />
        <ReferenceArrayInput
          source="maintenanceContracts"
          reference="MaintenanceContract"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintenanceContractTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput
          label="NormalizedEmail"
          source="normalizedEmail"
          type="email"
        />
        <TextInput label="NormalizedUserName" source="normalizedUserName" />
        <TextInput label="Note" source="note" />
        <PasswordInput label="PasswordHash" source="passwordHash" />
        <ReferenceArrayInput
          source="periodicMaintenanceOrders"
          reference="PeriodicMaintenanceOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PeriodicMaintenanceOrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <BooleanInput
          label="PhoneNumberConfirmed"
          source="phoneNumberConfirmed"
        />
        <TextInput label="SecurityStamp" source="securityStamp" />
        <BooleanInput
          label="ShouldChangePasswordOnNextLogin"
          source="shouldChangePasswordOnNextLogin"
        />
        <TextInput label="Surname" source="surname" />
        <BooleanInput label="TwoFactorEnabled" source="twoFactorEnabled" />
        <TextInput label="UserName" source="userName" />
      </SimpleForm>
    </Create>
  );
};
