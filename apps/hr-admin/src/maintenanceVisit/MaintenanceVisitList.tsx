import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ELEVATOR_TITLE_FIELD } from "../elevator/ElevatorTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const MaintenanceVisitList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MaintenanceVisits"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="ElevatorId"
          source="elevator.id"
          reference="Elevator"
        >
          <TextField source={ELEVATOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ElevatorStatusId" source="elevatorStatusId" />
        <TextField label="ID" source="id" />
        <TextField label="SpareParts" source="spareParts" />
        <ReferenceField label="StoreId" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VisitDate" source="visitDate" />
        <TextField label="VisitDocumentImage" source="visitDocumentImage" />
      </Datagrid>
    </List>
  );
};
