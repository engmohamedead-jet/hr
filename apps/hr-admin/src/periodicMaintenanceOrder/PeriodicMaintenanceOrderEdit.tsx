import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { CustomerElevatorTitle } from "../customerElevator/CustomerElevatorTitle";
import { CustomerUserTitle } from "../customerUser/CustomerUserTitle";
import { ElevatorTitle } from "../elevator/ElevatorTitle";
import { StoreTitle } from "../store/StoreTitle";

export const PeriodicMaintenanceOrderEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="ConfirmDate" source="confirmDate" />
        <DateTimeInput label="ContractEndDate" source="contractEndDate" />
        <DateTimeInput label="ContractStartDate" source="contractStartDate" />
        <ReferenceInput
          source="customerElevator.id"
          reference="CustomerElevator"
          label="CustomerElevatorId"
        >
          <SelectInput optionText={CustomerElevatorTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customerUserId.id"
          reference="CustomerUser"
          label="CustomerUserId"
        >
          <SelectInput optionText={CustomerUserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="elevatorId.id"
          reference="Elevator"
          label="ElevatorId"
        >
          <SelectInput optionText={ElevatorTitle} />
        </ReferenceInput>
        <BooleanInput label="IsConfirmed" source="isConfirmed" />
        <DateTimeInput label="OrderDate" source="orderDate" />
        <ReferenceInput source="storeId.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
