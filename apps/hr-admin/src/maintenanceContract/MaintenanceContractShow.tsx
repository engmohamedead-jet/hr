import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
} from "react-admin";

import { CONTRACTPERIOD_TITLE_FIELD } from "../contractPeriod/ContractPeriodTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { CUSTOMERUSER_TITLE_FIELD } from "../customerUser/CustomerUserTitle";
import { ELEVATOR_TITLE_FIELD } from "../elevator/ElevatorTitle";
import { STORE_TITLE_FIELD } from "../store/StoreTitle";

export const MaintenanceContractShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ConfirmDate" source="confirmDate" />
        <TextField label="ContactEndTime" source="contactEndTime" />
        <TextField label="ContactStartTime" source="contactStartTime" />
        <ReferenceField
          label="ContractPeriodId"
          source="contractperiod.id"
          reference="ContractPeriod"
        >
          <TextField source={CONTRACTPERIOD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ContractStartDate" source="contractStartDate" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="CustomerId"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
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
        <TextField label="Note" source="note" />
        <TextField label="OrderDate" source="orderDate" />
        <ReferenceField label="StoreId" source="store.id" reference="Store">
          <TextField source={STORE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
