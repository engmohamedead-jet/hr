import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { CONTRACTSTATUS_TITLE_FIELD } from "../contractStatus/ContractStatusTitle";
import { CUSTOMERELEVATOR_TITLE_FIELD } from "../customerElevator/CustomerElevatorTitle";
import { ELEVATOR_TITLE_FIELD } from "../elevator/ElevatorTitle";

export const InstallationContractShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
