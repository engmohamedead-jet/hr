import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { WORKCENTER_TITLE_FIELD } from "../workCenter/WorkCenterTitle";
import { WORKCENTERTAG_TITLE_FIELD } from "../workCenterTag/WorkCenterTagTitle";

export const WorkCenterWorkCenterTagShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
