import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateInput,
} from "react-admin";

import { ElevatorTitle } from "../elevator/ElevatorTitle";
import { StoreTitle } from "../store/StoreTitle";

export const MaintenanceVisitCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="elevator.id"
          reference="Elevator"
          label="ElevatorId"
        >
          <SelectInput optionText={ElevatorTitle} />
        </ReferenceInput>
        <SelectInput
          source="elevatorStatusId"
          label="ElevatorStatusId"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="SpareParts" source="spareParts" />
        <ReferenceInput source="store.id" reference="Store" label="StoreId">
          <SelectInput optionText={StoreTitle} />
        </ReferenceInput>
        <DateInput label="VisitDate" source="visitDate" />
        <div />
      </SimpleForm>
    </Create>
  );
};
