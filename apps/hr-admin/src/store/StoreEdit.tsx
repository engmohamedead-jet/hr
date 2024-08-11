import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AccountTransactionDetailTitle } from "../accountTransactionDetail/AccountTransactionDetailTitle";
import { AccountTransactionTitle } from "../accountTransaction/AccountTransactionTitle";
import { CustomerElevatorTitle } from "../customerElevator/CustomerElevatorTitle";
import { ElevatorTitle } from "../elevator/ElevatorTitle";
import { FailureReportingTitle } from "../failureReporting/FailureReportingTitle";
import { MaintenanceContractTitle } from "../maintenanceContract/MaintenanceContractTitle";
import { MaintenanceVisitTitle } from "../maintenanceVisit/MaintenanceVisitTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { OfficeTitle } from "../office/OfficeTitle";
import { PeriodicMaintenanceOrderTitle } from "../periodicMaintenanceOrder/PeriodicMaintenanceOrderTitle";
import { SaleTaxTitle } from "../saleTax/SaleTaxTitle";
import { StoreTypeTitle } from "../storeType/StoreTypeTitle";

export const StoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="accountTransactionDetails"
          reference="AccountTransactionDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTransactionDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="accountTransactions"
          reference="AccountTransaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AccountTransactionTitle} />
        </ReferenceArrayInput>
        <TextInput label="AddressLine1" source="addressLine1" />
        <BooleanInput label="AllowSale" source="allowSale" />
        <TextInput label="CellPhoneNumber" source="cellPhoneNumber" />
        <TextInput label="Code" source="code" />
        <ReferenceArrayInput
          source="customerElevators"
          reference="CustomerElevator"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerElevatorTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="elevators"
          reference="Elevator"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ElevatorTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="failureReportings"
          reference="FailureReporting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FailureReportingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Fax" source="fax" />
        <TextInput label="HomePhoneNumber" source="homePhoneNumber" />
        <ReferenceArrayInput
          source="maintenanceContracts"
          reference="MaintenanceContract"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintenanceContractTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="maintenanceVisits"
          reference="MaintenanceVisit"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintenanceVisitTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" source="note" />
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="office.id" reference="Office" label="OfficeId">
          <SelectInput optionText={OfficeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="periodicMaintenanceOrders"
          reference="PeriodicMaintenanceOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PeriodicMaintenanceOrderTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="saleTaxes"
          reference="SaleTax"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SaleTaxTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="storeType.id"
          reference="StoreType"
          label="StoreTypeId"
        >
          <SelectInput optionText={StoreTypeTitle} />
        </ReferenceInput>
        <TextInput label="Street" source="street" />
      </SimpleForm>
    </Edit>
  );
};
