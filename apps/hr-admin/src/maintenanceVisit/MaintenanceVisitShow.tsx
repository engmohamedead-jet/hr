import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { ELEVATOR_TITLE_FIELD } from "../elevator/ElevatorTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const MaintenanceVisitShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
