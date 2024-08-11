import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { CustomerElevatorTitle } from "../customerElevator/CustomerElevatorTitle";
import { CustomerUserTitle } from "../customerUser/CustomerUserTitle";
import { ElevatorTitle } from "../elevator/ElevatorTitle";
import { FailureTypeTitle } from "../failureType/FailureTypeTitle";
import { StoreTitle } from "../store/StoreTitle";

export const FailureReportingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="ContactingFromTime" source="contactingFromTime" />
        <DateTimeInput label="ContactingToTime" source="contactingToTime" />
        <ReferenceInput
          source="customerElevatorId.id"
          reference="CustomerElevator"
          label="CustomerElevator"
        >
          <SelectInput optionText={CustomerElevatorTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customerUser.id"
          reference="CustomerUser"
          label="CustomerUser"
        >
          <SelectInput optionText={CustomerUserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="elevator.id"
          reference="Elevator"
          label="Elevator"
        >
          <SelectInput optionText={ElevatorTitle} />
        </ReferenceInput>
        <TextInput
          label="FailureDescription"
          multiline
          source="failureDescription"
        />
        <ReferenceInput
          source="failureTypeId.id"
          reference="FailureType"
          label="FailureTypeId"
        >
          <SelectInput optionText={FailureTypeTitle} />
        </ReferenceInput>
        <TextInput label="Note" multiline source="note" />
        <DateTimeInput label="ReportingDate" source="reportingDate" />
        <DateTimeInput label="ReviewDate" source="reviewDate" />
        <ReferenceInput source="store.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <BooleanInput label="WasReviewed" source="wasReviewed" />
      </SimpleForm>
    </Edit>
  );
};
