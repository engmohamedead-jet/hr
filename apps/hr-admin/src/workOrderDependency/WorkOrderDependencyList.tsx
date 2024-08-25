import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { WORKORDER_TITLE_FIELD } from "../workOrder/WorkOrderTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const WorkOrderDependencyList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WorkOrderDependencies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
