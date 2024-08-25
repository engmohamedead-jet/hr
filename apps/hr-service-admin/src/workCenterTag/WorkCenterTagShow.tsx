import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";
import { WORKCENTER_TITLE_FIELD } from "../workCenter/WorkCenterTitle";
import { WORKCENTERTAG_TITLE_FIELD } from "./WorkCenterTagTitle";

export const WorkCenterTagShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Desciption" source="Desciption" />
        <TextField label="Code" source="code" />
        <TextField label="Color" source="color" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="IsActive" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="NormalizedName" source="normalizedName" />
        <TextField label="Note" source="note" />
        <ReferenceField label="TenantId" source="tenant.id" reference="Tenant">
          <TextField source={TENANT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="WorkCenterWorkCenterTag"
          target="workCenterTagIdId"
          label="WorkCenterWorkCenterTags"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="IsActive" source="isActive" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="TenantId"
              source="tenant.id"
              reference="Tenant"
            >
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
