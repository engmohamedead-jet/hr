import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { CUSTOMERELEVATOR_TITLE_FIELD } from "../customerElevator/CustomerElevatorTitle";
import { CUSTOMERUSER_TITLE_FIELD } from "../customerUser/CustomerUserTitle";
import { ELEVATOR_TITLE_FIELD } from "../elevator/ElevatorTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const PeriodicMaintenanceOrderList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PeriodicMaintenanceOrders"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ConfirmDate" source="confirmDate" />
        <TextField label="ContractEndDate" source="contractEndDate" />
        <TextField label="ContractStartDate" source="contractStartDate" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="CustomerElevatorId"
          source="customerelevator.id"
          reference="CustomerElevator"
        >
          <TextField source={CUSTOMERELEVATOR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="CustomerUserId"
          source="customeruser.id"
          reference="CustomerUser"
        >
          <TextField source={CUSTOMERUSER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="ElevatorId"
          source="elevator.id"
          reference="Elevator"
        >
          <TextField source={ELEVATOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <BooleanField label="IsConfirmed" source="isConfirmed" />
        <TextField label="OrderDate" source="orderDate" />
        <ReferenceField label="StoreId" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
