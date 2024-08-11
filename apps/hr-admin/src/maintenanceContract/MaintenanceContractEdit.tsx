import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { ContractPeriodTitle } from "../contractPeriod/ContractPeriodTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { CustomerUserTitle } from "../customerUser/CustomerUserTitle";
import { ElevatorTitle } from "../elevator/ElevatorTitle";
import { StoreTitle } from "../store/StoreTitle";

export const MaintenanceContractEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="ConfirmDate" source="confirmDate" />
        <DateTimeInput label="ContactEndTime" source="contactEndTime" />
        <DateTimeInput label="ContactStartTime" source="contactStartTime" />
        <ReferenceInput
          source="contractPeriodId.id"
          reference="ContractPeriod"
          label="ContractPeriodId"
        >
          <SelectInput optionText={ContractPeriodTitle} />
        </ReferenceInput>
        <DateInput label="ContractStartDate" source="contractStartDate" />
        <ReferenceInput
          source="customerId.id"
          reference="Customer"
          label="CustomerId"
        >
          <SelectInput optionText={CustomerTitle} />
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
        <TextInput label="Note" source="note" />
        <DateTimeInput label="OrderDate" source="orderDate" />
        <ReferenceInput source="storeId.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
