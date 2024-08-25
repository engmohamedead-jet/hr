import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { WORKORDER_TITLE_FIELD } from "../workOrder/WorkOrderTitle";

export const WorkOrderRoutingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ActualCost" source="actualCost" />
        <TextField label="ActualEndDate" source="actualEndDate" />
        <TextField label="ActualResourceHours" source="actualResourceHours" />
        <TextField label="ActualStartDate" source="actualStartDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Note" source="note" />
        <TextField label="PlannedCost" source="plannedCost" />
        <TextField label="ScheduledEndDate" source="scheduledEndDate" />
        <TextField label="ScheduledStartDate" source="scheduledStartDate" />
        <TextField label="Sequence" source="sequence" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="WorkOrderId"
          source="workorder.id"
          reference="WorkOrder"
        >
          <TextField source={WORKORDER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
