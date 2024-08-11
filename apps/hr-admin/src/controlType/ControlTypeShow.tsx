import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONTROLTYPE_TITLE_FIELD } from "./ControlTypeTitle";
import { DOORTYPE_TITLE_FIELD } from "../doorType/DoorTypeTitle";
import { ELEVATORTYPE_TITLE_FIELD } from "../elevatorType/ElevatorTypeTitle";
import { MOTORTYPE_TITLE_FIELD } from "../motorType/MotorTypeTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const ControlTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Name" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="isActive" source="isActive" />
        <TextField label="Code" source="name" />
        <TextField label="Note" source="note" />
        <TextField label="Description" source="noted" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Elevator"
          target="controlTypeIdId"
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
      </SimpleShowLayout>
    </Show>
  );
};
