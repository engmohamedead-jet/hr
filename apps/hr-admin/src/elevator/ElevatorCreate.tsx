import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ControlTypeTitle } from "../controlType/ControlTypeTitle";
import { CustomerElevatorTitle } from "../customerElevator/CustomerElevatorTitle";
import { CustomerUserTitle } from "../customerUser/CustomerUserTitle";
import { DoorTypeTitle } from "../doorType/DoorTypeTitle";
import { ElevatorSparePartTitle } from "../elevatorSparePart/ElevatorSparePartTitle";
import { ElevatorTypeTitle } from "../elevatorType/ElevatorTypeTitle";
import { FailureReportingTitle } from "../failureReporting/FailureReportingTitle";
import { InstallationContractTitle } from "../installationContract/InstallationContractTitle";
import { MaintenanceContractTitle } from "../maintenanceContract/MaintenanceContractTitle";
import { MaintenanceVisitTitle } from "../maintenanceVisit/MaintenanceVisitTitle";
import { MotorTypeTitle } from "../motorType/MotorTypeTitle";
import { PeriodicMaintenanceOrderTitle } from "../periodicMaintenanceOrder/PeriodicMaintenanceOrderTitle";
import { StoreTitle } from "../store/StoreTitle";

export const ElevatorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="BannerSize" source="bannerSize" />
        <TextInput label="CabinetSize" source="cabinetSize" />
        <TextInput label="Code" source="code" />
        <ReferenceInput
          source="controlTypeId.id"
          reference="ControlType"
          label="ControlType"
        >
          <SelectInput optionText={ControlTypeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="customerElevators"
          reference="CustomerElevator"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerElevatorTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="customerUsers"
          reference="CustomerUser"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerUserTitle} />
        </ReferenceArrayInput>
        <TextInput label="Description" multiline source="description" />
        <NumberInput label="DoorSize" source="doorSize" />
        <ReferenceInput
          source="doorTypeId.id"
          reference="DoorType"
          label="DoorType"
        >
          <SelectInput optionText={DoorTypeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="elevatorSpareParts"
          reference="ElevatorSparePart"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ElevatorSparePartTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="elevatorTypeId.id"
          reference="ElevatorType"
          label="ElevatorType"
        >
          <SelectInput optionText={ElevatorTypeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="failureReportings"
          reference="FailureReporting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FailureReportingTitle} />
        </ReferenceArrayInput>
        <NumberInput label="Freight" source="freight" />
        <ReferenceArrayInput
          source="installationContracts"
          reference="InstallationContract"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InstallationContractTitle} />
        </ReferenceArrayInput>
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
        <TextInput label="MotorPower" source="motorPower" />
        <ReferenceInput
          source="motorTypeId.id"
          reference="MotorType"
          label="MotorType"
        >
          <SelectInput optionText={MotorTypeTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <TextInput label="NormalizedName" source="normalizedName" />
        <ReferenceArrayInput
          source="periodicMaintenanceOrders"
          reference="PeriodicMaintenanceOrder"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PeriodicMaintenanceOrderTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="PersonsCount" source="personsCount" />
        <NumberInput step={1} label="StationsCount" source="stationsCount" />
        <ReferenceInput source="storeId.id" reference="Store" label="Store">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
