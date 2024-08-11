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
import { FAILURETYPE_TITLE_FIELD } from "../failureType/FailureTypeTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const FailureReportingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FailureReportings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ContactingFromTime" source="contactingFromTime" />
        <TextField label="ContactingToTime" source="contactingToTime" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="CustomerElevator"
          source="customerelevator.id"
          reference="CustomerElevator"
        >
          <TextField source={CUSTOMERELEVATOR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="CustomerUser"
          source="customeruser.id"
          reference="CustomerUser"
        >
          <TextField source={CUSTOMERUSER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Elevator"
          source="elevator.id"
          reference="Elevator"
        >
          <TextField source={ELEVATOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="FailureDescription" source="failureDescription" />
        <ReferenceField
          label="FailureTypeId"
          source="failuretype.id"
          reference="FailureType"
        >
          <TextField source={FAILURETYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <TextField label="ReportingDate" source="reportingDate" />
        <TextField label="ReviewDate" source="reviewDate" />
        <ReferenceField label="StoreId" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="WasReviewed" source="wasReviewed" />
      </Datagrid>
    </List>
  );
};
