import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CUSTOMERELEVATOR_TITLE_FIELD } from "../customerElevator/CustomerElevatorTitle";
import { CUSTOMERUSER_TITLE_FIELD } from "./CustomerUserTitle";
import { ELEVATOR_TITLE_FIELD } from "../elevator/ElevatorTitle";
import { FAILURETYPE_TITLE_FIELD } from "../failureType/FailureTypeTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { CONTRACTPERIOD_TITLE_FIELD } from "../contractPeriod/ContractPeriodTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const CustomerUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="FailureReporting"
          target="customerUserId"
          label="FailureReportings"
        >
          <Datagrid rowClick="show">
            <TextField label="ContactingFromTime" source="contactingFromTime" />
            <TextField label="ContactingToTime" source="contactingToTime" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerElevator"
              source="customerelevator.id"
              reference="CustomerElevator"
            >
              <TextField source={CUSTOMERELEVATOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="CustomerUser"
              source="customeruser.id"
              reference="CustomerUser"
            >
              <TextField source={CUSTOMERUSER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Elevator"
              source="elevator.id"
              reference="Elevator"
            >
              <TextField source={ELEVATOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="FailureDescription" source="failureDescription" />
            <ReferenceField
              label="FailureTypeId"
              source="failuretype.id"
              reference="FailureType"
            >
              <TextField source={FAILURETYPE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <TextField label="ReportingDate" source="reportingDate" />
            <TextField label="ReviewDate" source="reviewDate" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <BooleanField label="WasReviewed" source="wasReviewed" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MaintenanceContract"
          target="customerUserIdId"
          label="MaintenanceContracts"
        >
          <Datagrid rowClick="show">
            <TextField label="ConfirmDate" source="confirmDate" />
            <TextField label="ContactEndTime" source="contactEndTime" />
            <TextField label="ContactStartTime" source="contactStartTime" />
            <ReferenceField
              label="ContractPeriodId"
              source="contractperiod.id"
              reference="ContractPeriod"
            >
              <TextField source={CONTRACTPERIOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ContractStartDate" source="contractStartDate" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerId"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="CustomerUserId"
              source="customeruser.id"
              reference="CustomerUser"
            >
              <TextField source={CUSTOMERUSER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ElevatorId"
              source="elevator.id"
              reference="Elevator"
            >
              <TextField source={ELEVATOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="IsConfirmed" source="isConfirmed" />
            <TextField label="Note" source="note" />
            <TextField label="OrderDate" source="orderDate" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PeriodicMaintenanceOrder"
          target="customerUserIdId"
          label="PeriodicMaintenanceOrders"
        >
          <Datagrid rowClick="show">
            <TextField label="ConfirmDate" source="confirmDate" />
            <TextField label="ContractEndDate" source="contractEndDate" />
            <TextField label="ContractStartDate" source="contractStartDate" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerElevatorId"
              source="customerelevator.id"
              reference="CustomerElevator"
            >
              <TextField source={CUSTOMERELEVATOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="CustomerUserId"
              source="customeruser.id"
              reference="CustomerUser"
            >
              <TextField source={CUSTOMERUSER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="ElevatorId"
              source="elevator.id"
              reference="Elevator"
            >
              <TextField source={ELEVATOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="IsConfirmed" source="isConfirmed" />
            <TextField label="OrderDate" source="orderDate" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
