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
import { WORKCENTERTAG_TITLE_FIELD } from "../workCenterTag/WorkCenterTagTitle";

export const WorkCenterWorkCenterTagList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"WorkCenterWorkCenterTags"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Note" source="note" />
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
        <ReferenceField
          label="WorkCenterTagId"
          source="workcentertag.id"
          reference="WorkCenterTag"
        >
          <TextField source={WORKCENTERTAG_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
