import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { ELEVATOR_TITLE_FIELD } from "./ElevatorTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { CUSTOMERELEVATOR_TITLE_FIELD } from "../customerElevator/CustomerElevatorTitle";
import { CUSTOMERUSER_TITLE_FIELD } from "../customerUser/CustomerUserTitle";
import { FAILURETYPE_TITLE_FIELD } from "../failureType/FailureTypeTitle";
import { CONTRACTSTATUS_TITLE_FIELD } from "../contractStatus/ContractStatusTitle";
import { CONTRACTPERIOD_TITLE_FIELD } from "../contractPeriod/ContractPeriodTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { CONTROLTYPE_TITLE_FIELD } from "../controlType/ControlTypeTitle";
import { DOORTYPE_TITLE_FIELD } from "../doorType/DoorTypeTitle";
import { ELEVATORTYPE_TITLE_FIELD } from "../elevatorType/ElevatorTypeTitle";
import { MOTORTYPE_TITLE_FIELD } from "../motorType/MotorTypeTitle";

export const ElevatorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="BannerSize" source="bannerSize" />
        <TextField label="CabinetSize" source="cabinetSize" />
        <TextField label="Code" source="code" />
        <ReferenceField
          label="ControlType"
          source="controltype.id"
          reference="ControlType"
        >
          <TextField source={CONTROLTYPE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="DoorSize" source="doorSize" />
        <ReferenceField
          label="DoorType"
          source="doortype.id"
          reference="DoorType"
        >
          <TextField source={DOORTYPE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="ElevatorType"
          source="elevatortype.id"
          reference="ElevatorType"
        >
          <TextField source={ELEVATORTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Freight" source="freight" />
        <TextField label="ID" source="id" />
        <TextField label="MotorPower" source="motorPower" />
        <ReferenceField
          label="MotorType"
          source="motortype.id"
          reference="MotorType"
        >
          <TextField source={MOTORTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="PersonsCount" source="personsCount" />
        <TextField label="StationsCount" source="stationsCount" />
        <ReferenceField label="Store" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CustomerElevator"
          target="elevatorIdId"
          label="CustomerElevators"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <TextField label="Amount" source="amount" />
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Elevator"
              source="elevator.id"
              reference="Elevator"
            >
              <TextField source={ELEVATOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="HasPendingMaintenanceContractOrders"
              source="hasPendingMaintenanceContractOrders"
            />
            <TextField label="ID" source="id" />
            <TextField
              label="MaintenanceContractDocumentImage"
              source="maintenanceContractDocumentImage"
            />
            <TextField label="MaintenanceEndDate" source="maintenanceEndDate" />
            <TextField
              label="MaintenanceStartDate"
              source="maintenanceStartDate"
            />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="PhoneNumber" source="phoneNumber" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CustomerUser"
          target="elevatorIdId"
          label="CustomerUsers"
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="ElevatorSparePart"
          target="elevatorId"
          label="ElevatorSpareParts"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Elevator"
              source="elevator.id"
              reference="Elevator"
            >
              <TextField source={ELEVATOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Price" source="price" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="WholeSalePrice" source="wholeSalePrice" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FailureReporting"
          target="elevatorId"
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
          reference="InstallationContract"
          target="elevatorIdId"
          label="InstallationContracts"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <TextField label="Amount" source="amount" />
            <TextField label="CabinetTechnician" source="cabinetTechnician" />
            <TextField label="ContractDate" source="contractDate" />
            <TextField label="ContractNumber" source="contractNumber" />
            <ReferenceField
              label="ContractStatusId"
              source="contractstatus.id"
              reference="ContractStatus"
            >
              <TextField source={CONTRACTSTATUS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CustomerElevator"
              source="customerelevator.id"
              reference="CustomerElevator"
            >
              <TextField source={CUSTOMERELEVATOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="DoorTechnician" source="doorTechnician" />
            <TextField
              label="ElectricityTechnician"
              source="electricityTechnician"
            />
            <ReferenceField
              label="ElevatorId"
              source="elevator.id"
              reference="Elevator"
            >
              <TextField source={ELEVATOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ElevatorsCount" source="elevatorsCount" />
            <TextField label="ID" source="id" />
            <TextField label="PhoneNumber" source="phoneNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MaintenanceContract"
          target="elevatorIdId"
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
          reference="MaintenanceVisit"
          target="elevatorId"
          label="MaintenanceVisits"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="ElevatorId"
              source="elevator.id"
              reference="Elevator"
            >
              <TextField source={ELEVATOR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ElevatorStatusId" source="elevatorStatusId" />
            <TextField label="ID" source="id" />
            <TextField label="SpareParts" source="spareParts" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="VisitDate" source="visitDate" />
            <TextField label="VisitDocumentImage" source="visitDocumentImage" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PeriodicMaintenanceOrder"
          target="elevatorIdId"
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
