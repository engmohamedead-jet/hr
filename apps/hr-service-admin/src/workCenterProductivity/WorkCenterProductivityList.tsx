import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { WORKCENTER_TITLE_FIELD } from "../workCenter/WorkCenterTitle";

export const WorkCenterProductivityList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WorkCenterProductivities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="Duration" source="duration" />
        <TextField label="EndDate" source="endDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Note" source="note" />
        <TextField label="StartDate" source="startDate" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="WorkCenterId"
          source="workcenter.id"
          reference="WorkCenter"
        >
          <TextField source={WORKCENTER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
