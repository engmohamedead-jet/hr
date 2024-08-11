import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CONTROLTYPE_TITLE_FIELD } from "../controlType/ControlTypeTitle";
import { DOORTYPE_TITLE_FIELD } from "../doorType/DoorTypeTitle";
import { ELEVATORTYPE_TITLE_FIELD } from "../elevatorType/ElevatorTypeTitle";
import { MOTORTYPE_TITLE_FIELD } from "../motorType/MotorTypeTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const ElevatorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Elevators"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
