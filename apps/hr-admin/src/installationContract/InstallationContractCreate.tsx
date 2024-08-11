import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ContractStatusTitle } from "../contractStatus/ContractStatusTitle";
import { CustomerElevatorTitle } from "../customerElevator/CustomerElevatorTitle";
import { ElevatorTitle } from "../elevator/ElevatorTitle";

export const InstallationContractCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <NumberInput label="Amount" source="amount" />
        <TextInput label="CabinetTechnician" source="cabinetTechnician" />
        <DateTimeInput label="ContractDate" source="contractDate" />
        <TextInput label="ContractNumber" source="contractNumber" />
        <ReferenceInput
          source="contractStatusId.id"
          reference="ContractStatus"
          label="ContractStatusId"
        >
          <SelectInput optionText={ContractStatusTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customerElevatorId.id"
          reference="CustomerElevator"
          label="CustomerElevator"
        >
          <SelectInput optionText={CustomerElevatorTitle} />
        </ReferenceInput>
        <TextInput label="DoorTechnician" source="doorTechnician" />
        <TextInput
          label="ElectricityTechnician"
          source="electricityTechnician"
        />
        <ReferenceInput
          source="elevatorId.id"
          reference="Elevator"
          label="ElevatorId"
        >
          <SelectInput optionText={ElevatorTitle} />
        </ReferenceInput>
        <TextInput label="ElevatorsCount" source="elevatorsCount" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
