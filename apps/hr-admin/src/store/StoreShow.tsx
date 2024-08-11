import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ACCOUNTTRANSACTION_TITLE_FIELD } from "../accountTransaction/AccountTransactionTitle";
import { STORE_TITLE_FIELD } from "./StoreTitle";
import { TRANSACTIONTYPE_TITLE_FIELD } from "../transactionType/TransactionTypeTitle";
import { COSTCENTER_TITLE_FIELD } from "../costCenter/CostCenterTitle";
import { ELEVATOR_TITLE_FIELD } from "../elevator/ElevatorTitle";
import { CONTROLTYPE_TITLE_FIELD } from "../controlType/ControlTypeTitle";
import { DOORTYPE_TITLE_FIELD } from "../doorType/DoorTypeTitle";
import { ELEVATORTYPE_TITLE_FIELD } from "../elevatorType/ElevatorTypeTitle";
import { MOTORTYPE_TITLE_FIELD } from "../motorType/MotorTypeTitle";
import { CUSTOMERELEVATOR_TITLE_FIELD } from "../customerElevator/CustomerElevatorTitle";
import { CUSTOMERUSER_TITLE_FIELD } from "../customerUser/CustomerUserTitle";
import { FAILURETYPE_TITLE_FIELD } from "../failureType/FailureTypeTitle";
import { CONTRACTPERIOD_TITLE_FIELD } from "../contractPeriod/ContractPeriodTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { OFFICE_TITLE_FIELD } from "../office/OfficeTitle";
import { STORETYPE_TITLE_FIELD } from "../storeType/StoreTypeTitle";

export const StoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="OfficeId" source="office.id" reference="Office">
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
        <ReferenceManyField
          reference="AccountTransactionDetail"
          target="storeIdId"
          label="AccountTransactionDetails"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="AccountTransactionId"
              source="accounttransaction.id"
              reference="AccountTransaction"
            >
              <TextField source={ACCOUNTTRANSACTION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Credit" source="credit" />
            <TextField label="Debit" source="debit" />
            <TextField label="ExchangeRate" source="exchangeRate" />
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="Serial" source="serial" />
            <TextField label="StatementReference" source="statementReference" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TransactionDate" source="transactionDate" />
            <ReferenceField
              label="TransactionTypeId"
              source="transactiontype.id"
              reference="TransactionType"
            >
              <TextField source={TRANSACTIONTYPE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AccountTransaction"
          target="storeId"
          label="AccountTransactions"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="CostCenterId"
              source="costcenter.id"
              reference="CostCenter"
            >
              <TextField source={COSTCENTER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <TextField label="ReferenceNumber" source="referenceNumber" />
            <TextField label="StatementReference" source="statementReference" />
            <ReferenceField label="StoreId" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="TransactionDate" source="transactionDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CustomerElevator"
          target="storeIdId"
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
          reference="Elevator"
          target="storeIdId"
          label="Elevators"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FailureReporting"
          target="storeId"
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
          target="storeIdId"
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
          target="storeId"
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
          reference="Notification"
          target="storeId"
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
        <ReferenceManyField
          reference="PeriodicMaintenanceOrder"
          target="storeIdId"
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
        <ReferenceManyField
          reference="SaleTax"
          target="storeId"
          label="SaleTaxes"
        >
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsExemption" source="isExemption" />
            <TextField label="Name" source="name" />
            <TextField label="NormalizedName" source="normalizedName" />
            <TextField label="Note" source="note" />
            <TextField label="Rate" source="rate" />
            <ReferenceField label="Store" source="store.id" reference="Store">
              <TextField source={STORE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
