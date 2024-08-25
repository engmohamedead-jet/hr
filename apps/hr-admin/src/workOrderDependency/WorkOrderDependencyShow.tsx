import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { WORKORDER_TITLE_FIELD } from "../workOrder/WorkOrderTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const WorkOrderDependencyShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="BlockedByWorkOrderId"
          source="workorder.id"
          reference="WorkOrder"
        >
          <TextField source={WORKORDER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Note" source="note" />
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
