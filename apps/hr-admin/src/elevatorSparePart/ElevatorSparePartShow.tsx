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

export const ElevatorSparePartShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Elevator"
          source="elevator.id"
          reference="Elevator"
        >
          <TextField source={ELEVATOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="WholeSalePrice" source="wholeSalePrice" />
      </SimpleShowLayout>
    </Show>
  );
};
