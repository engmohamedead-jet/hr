import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { CUSTOMERELEVATOR_TITLE_FIELD } from "./CustomerElevatorTitle";
import { CUSTOMERUSER_TITLE_FIELD } from "../customerUser/CustomerUserTitle";
import { ELEVATOR_TITLE_FIELD } from "../elevator/ElevatorTitle";
import { FAILURETYPE_TITLE_FIELD } from "../failureType/FailureTypeTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";
import { CONTRACTSTATUS_TITLE_FIELD } from "../contractStatus/ContractStatusTitle";

export const CustomerElevatorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="MaintenanceStartDate" source="maintenanceStartDate" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <ReferenceField label="StoreId" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="FailureReporting"
          target="customerElevatorIdId"
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
          target="customerElevatorIdId"
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
          reference="PeriodicMaintenanceOrder"
          target="customerElevatorId"
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
