import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { ElevatorTitle } from "../elevator/ElevatorTitle";
import { FailureReportingTitle } from "../failureReporting/FailureReportingTitle";
import { InstallationContractTitle } from "../installationContract/InstallationContractTitle";
import { PeriodicMaintenanceOrderTitle } from "../periodicMaintenanceOrder/PeriodicMaintenanceOrderTitle";
import { StoreTitle } from "../store/StoreTitle";

export const CustomerElevatorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Amount" source="amount" />
        <TextInput label="Code" source="code" />
        <ReferenceInput
          source="elevatorId.id"
          reference="Elevator"
          label="Elevator"
        >
          <SelectInput optionText={ElevatorTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="failureReportings"
          reference="FailureReporting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FailureReportingTitle} />
        </ReferenceArrayInput>
        <TextInput
          label="HasPendingMaintenanceContractOrders"
          source="hasPendingMaintenanceContractOrders"
        />
        <ReferenceArrayInput
          source="installationContracts"
          reference="InstallationContract"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InstallationContractTitle} />
        </ReferenceArrayInput>
        <div />
        <DateTimeInput label="MaintenanceEndDate" source="maintenanceEndDate" />
        <DateTimeInput
          label="MaintenanceStartDate"
          source="maintenanceStartDate"
        />
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceArrayInput
          source="periodicMaintenanceOrders"
          reference="PeriodicMaintenanceOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PeriodicMaintenanceOrderTitle} />
        </ReferenceArrayInput>
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <ReferenceInput source="storeId.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
